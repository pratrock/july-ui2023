const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("here token", token);
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decode", decode.id);
      req.user = await User.findById(decode.id).select("-password");
      console.log("req-user", req.user);
      next();
    } catch (error) {
      console.log("what is error?", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  console.log("still token", token);
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
module.exports = { protect };
