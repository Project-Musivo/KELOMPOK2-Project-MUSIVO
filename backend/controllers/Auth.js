const { User } = require("../helper/relation.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

exports.test = async (req, res, next) => {
  res.json({ Message: "hello OK" });
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Cari email
    const existingEmail = await User.findOne({ where: { email } });

    // Jika tidak ada Email di database maka
    if (!existingEmail)
      return res.status(404).json({ msg: "Email tidak ditemukan" });

    const compare = await argon2.verify(existingEmail.password, password);

    if (!compare) {
      return res.status(404).json({ message: "Password salah!" });
    }

    const payLoad = {
      id: existingEmail.id,
      nama: existingEmail.nama,
    };

    const token = jwt.sign(payLoad, SECRET);

    await User.update(
      { user_token: token },
      {
        where: {
          id: existingEmail.id,
        },
      }
    );

    res.status(200).json({
      msg: "Login berhasil",
      token: token,
    });
  } catch (error) {
    res.status(422).json({ msg: error.message });
  }
};

exports.userMe = (req, res) => {
  const dataSaya = req.user;
  res.json({ data: dataSaya });
};

exports.logout = async (req, res, next) => {
  try {
    const tokenuser = req.headers.tokenuser;

    console.log(tokenuser);

    return res.status(200).json({ msg: "Logout berhasil" });
  } catch (error) {
    //   res.status(500).json({ msg: "Terjadi kesalahan saat logout" });
    res.status(500).json({ msg: error.message });
  }
};
