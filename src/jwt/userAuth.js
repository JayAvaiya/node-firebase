require("dotenv").config();
const jwt = require("jsonwebtoken");
const user = require("../data/user");

const userAuth = async (req, res, next) => {
  try {
    auth;
    let token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });
    token = req.header("Authorization").split(" ")[1];
    const { username, password, iat } = await jwt.verify(token, process.env.TOKEN_SECRET);
    const foundUser = await user.filter((item) => item.username === username && item.password === password)?.[0];
    if (!foundUser) {
      return res.status(401).json({ message: "Access Denied" });
    }
    req.user = foundUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = userAuth;
