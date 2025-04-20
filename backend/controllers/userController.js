import user from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  console.log("signup function");

  try {
    if(!req.files || Object.keys(req.files).length===0){
      return res.status(400).json({message:"photo is required"})
    }

    const { email, name, number, education, role, password } = req.body;

    const { photo } = req.files;
    // console.log("req.body : ",req.body)
    // console.log("req.files :",req.files)
    // console.log("photo from frontend :",photo);

    const supportedFormat = ["image/jpg", "image/jpeg", "image/png"];

    if (!supportedFormat.includes(photo.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "image type not supported",
      });
    }

    if (
      !email ||
      !name ||
      !number ||
      !education ||
      !role ||
      !password ||
      !photo
    ) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    //uploading to cloudinary
    const response = await cloudinary.uploader.upload(photo.tempFilePath);
    // console.log(response);

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await user.create({
      email,
      name,
      number,
      education,
      password: hashedPassword,
      role,
      photo: { public_id: response.public_id, url: response.url },
    });

    return res.status(200).json({
      success: true,
      data:data,
      message: "user register successfully",
    });
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({
      success: false,
      message: "unable to register user",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(401).json({
        success: false,
        message: "fill all the fields",
      });
    }

    const findUser = await user.findOne({ email }).select("+password");
    if (!findUser) {
      return res.status(401).json({
        success: false,
        message: "user not registered",
      });
    }

console.log("fkbwefkjenflkewnfw : ",findUser)

    if(findUser.role !==role){
      return res.status(400).json({
        message: "given user role not found",
      });
    }

    // verify password
    if (await bcrypt.compare(password, findUser.password)) {
      //give token
      const payload = { id: findUser._id, role: findUser.role };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      await user.findByIdAndUpdate(findUser._id, { token });
      // console.log(token);
      //adding token to cookie
      res.cookie("token1", token, {
        httpOnly: true,
        // sameSite: "none",
        // secure: true, // Vercel ke liye zaruri (HTTPS req ke liye)
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
      return res.status(200).json({
        success: true,
        data: findUser,
        message: "token created successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "password incorrect",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "try again later",
    });
  }
};

export const logout = (req, res) => {
try{
    res.clearCookie("token1", { httpOnly: true });
    res.status(200).json({ 
      success: true, 
      message: "logout successfully"
   });
}catch(error){
    res.status(500).json({ 
        success: false, 
        message: "internal server error"
     });
}
};

export const myProfile = async(req,res)=>{
  const user = await req.user;
  res.status(200).json({
    success:true,
    data:user,
  })
}

export const getAllAdmin = async(req,res)=>{
  const admins = await user.find({role:"admin"})
  res.status(200).json({
    success:true,
    data:admins,
  })
}