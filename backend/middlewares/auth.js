import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const parsedToken = req.cookies.token1;

    const decode = jwt.verify(parsedToken, process.env.JWT_SECRET_KEY);
    if (!decode) {
      return res.status(400).json({
        success: false,
        message: "token is invalid",
      });
    }

    const findUser = await user.findById(decode.id);
    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }

    // console.log("findUser :", findUser);
    req.user = findUser;

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const isAdmin = async (req, res,next) => {

    if (req.user.role !== "admin") {
        return res.status(400).json({
            success: false,
            message: "you are not a admin to create blog",
          });
    }
    next();
};
