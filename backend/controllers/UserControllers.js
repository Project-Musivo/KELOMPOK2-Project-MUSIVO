const { User } = require("../helper/relation.js");
const argon2 = require("argon2");
const { Op } = require("sequelize");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      // ambil semua field kecuali id dan password
      attributes: [
        "uuid",
        "nickName",
        "firstName",
        "lastName",
        "email",
        "role",
        "profile_picture",
        "url",
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    // res.status(500).json({ message: "Terjadi kesalahan server" });
    res.status(500).json({ msg: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      // ambil semua field kecuali id dan password
      attributes: [
        "uuid",
        "nickName",
        "firstName",
        "lastName",
        "email",
        "role",
        "profile_picture",
        "url",
      ],
      where: {
        uuid: req.params.id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: "Terjadi kesalahan server" });
    res.status(500).json({ msg: error.message });
  }
};

// register || create user
exports.createUser = async (req, res) => {
  const { nickName, password, confPassword, firstName, lastName, email } =
    req.body;

  // Pengecekan semua input
  if (!nickName) {
    return res.status(400).json({ msg: "Nickname harus diisi" });
  } else if (!password) {
    return res.status(400).json({ msg: "Password harus diisi" });
  } else if (!confPassword) {
    return res.status(400).json({ msg: "Confirm Password harus diisi" });
  } else if (!firstName) {
    return res.status(400).json({ msg: "First Name harus diisi" });
  } else if (!lastName) {
    return res.status(400).json({ msg: "Last Name harus diisi" });
  } else if (!email) {
    return res.status(400).json({ msg: "Email harus diisi" });
  }

  try {
    // Hash password
    const hashPassword = await argon2.hash(password);

    // Cek apakah pengguna dengan nickName yang sama sudah ada di database
    const existingUser = await User.findOne({ where: { nickName } });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User dengan nickName ini sudah digunakan" });
    }

    // Cek apakah pengguna dengan email yang sama sudah ada di database
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ msg: "Email ini sudah digunakan" });
    }

    // Set default value role : 'user'
    const role = "user";

    await User.create({
      nickName,
      password: hashPassword,
      firstName,
      lastName,
      email,
      role,
    });

    res.status(201).json({ msg: "Berhasil membuat akun" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.editUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User tidak ditemukan" });
  }

  const { nickName, password, confPassword, firstName, lastName, email, role } =
    req.body;

  // Cek apakah nickName sudah ada di database dan bukan nickName pengguna saat ini
  const existingUser = await User.findOne({
    where: {
      nickName,
      uuid: {
        [Op.ne]: user.uuid, // pastikan UUID tidak sama dengan pengguna saat ini
      },
    },
    // Mencari pengguna dengan nickName yang sama dan UUID yang tidak sama dengan
    // pengguna(pengguna yang melakukan edit / sedang diedit ) saat ini.
  });

  // jika existingUser maka
  if (existingUser) {
    return res
      .status(409)
      .json({ msg: "Nickname ini sudah digunakan oleh pengguna lain." });
  }

  // Cek email agar tidak sama dengan user lain

  const existingEmail = await User.findOne({
    where: {
      email,
      uuid: {
        [Op.ne]: user.uuid,
      },
    },
  });

  if (existingEmail) {
    return res
      .status(409)
      .json({ msg: "Email ini sudah digunakan oleh pengguna lain." });
  }

  // Placeholder
  //  jika string kosong atau null (user tidak mengisi password)
  let hashPassword = user.password; // maka default valuenya akan mengambil dari database

  if (password !== "" && password !== null) {
    if (password !== confPassword) {
      return res
        .status(400)
        .json({ msg: "Password dan Confirm Password tidak cocok" });
    }
    hashPassword = await argon2.hash(password);
  }

  //  jika string kosong atau null (user tidak mengisi password)
  let roles = user.role; // maka default valuenya akan mengambil dari database

  if (role !== "" && role !== null) {
    // cek apakah isi role hanya user atau admin yang boleh
    if (role !== "user" && role !== "admin") {
      return res
        .status(422)
        .json({ msg: "Role hanya bisa 'user' atau 'admin'" });
    }

    roles = role;
  }

  try {
    let fileName = user.profile_picture;
    let url = user.url;

    if (req.files && req.files.file) {
      const file = req.files.file;

      // Periksa jenis file dan ukuran file
      const ext = path.extname(file.name);
      const allowedTypes = [".png", ".jpg", ".jpeg"];

      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Invalid image file" });
      }

      const maxSize = 10 * 1024 * 1024; // 10MB

      if (file.size > maxSize) {
        return res.status(422).json({ msg: "Maximum file size is 10MB" });
      }

      // Hapus file lama jika ada
      if (user.profile_picture) {
        const filePath = path.join(
          __dirname,
          "../public/profile-picture",
          user.profile_picture
        );

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      const randomString = crypto.randomBytes(8).toString("hex");
      const timestamp = Date.now();
      fileName = `${timestamp}-${randomString}${ext}`;
      url = `${req.protocol}://${req.get("host")}/profile-picture/${fileName}`;

      file.mv(
        path.join(__dirname, "../public/profile-picture", fileName),
        (err) => {
          if (err) {
            return res.status(500).json({ msg: err.message });
          }
        }
      );
    }

    await User.update(
      {
        nickName,
        password: hashPassword,
        firstName,
        lastName,
        email,
        role: roles,
        profile_picture: fileName,
        url,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Hapus user

exports.deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  try {
    // Hapus profile picture
    if (user.profile_picture) {
      const profilePicturePath = `./public/profile-picture/${user.profile_picture}`;

      // Cek apakah filenya ada
      if (fs.existsSync(profilePicturePath)) {
        // jika ada hapus file.
        fs.unlinkSync(profilePicturePath);
        console.log("File berhasil dihapus");
      } else {
        console.log("File tidak ditemukan");
      }
    }

    await user.destroy({
      where: {
        id: user.id,
      },
    });

    res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
