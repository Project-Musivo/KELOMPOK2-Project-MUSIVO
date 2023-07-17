const jwt = require("jsonwebtoken");
const { User } = require("../helper/relation.js");
const SECRET = process.env.SECRET;

const userMIddleware = (req, res, next) => {
  const tokenuser = req.headers.tokenuser;
  if (tokenuser) {
    jwt.verify(tokenuser, SECRET, async (err, decoded) => {
      if (err) {
        return res.json({ Message: "gagal autentikasi" });
      } else {
        if (decoded) {
          const data = decoded;
          const dbUser = await User.findOne({
            where: { id: data.id },
          });
          if (!dbUser) {
            return res.json({ Message: "user tidak ada" });
          }
          req.user = dbUser;
          next();
        }
      }
    });
  } else {
    return res.send("token belum masuk");
  }
};

module.exports = userMIddleware;
