import { v2 as cloudinary } from "cloudinary";
import blog from "../models/blog.model.js";
import mongoose from 'mongoose'

export const createBlog = async (req, res) => {
  try {
    const { category, title, about } = req.body;

    const { blogImage } = req.files;
    console.log("blogImage:", blogImage);

    const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];

    if (!supportedFormats.includes(blogImage.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "image type not supported",
      });
    }

    if (!category || !title || !about) {
      return res.status(400).json({
        success: false,
        message: "fill all the fields",
      });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
      blogImage.tempFilePath
    );

// console.log("req.user.photo.url :",req.user.photo.url)
// console.log("req :",req.user)
    const save = await blog.create({
      category,
      title,
      about,
      blogImage: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.url,
      },
      adminPhoto: req.user.photo.url,
      adminName: req.user.name,
      createdBy: req.user._id,  
    });

    res.status(200).json({
      success: true,
      data: save,
      message: "blog created successfully",
    });
  } catch (error) {
    console.log("error :", error);
    return res.status(500).json({
      success: false,
      message: "unable to create blog",
    });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "blog not found",
    });
  }
  const del = await blog.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
};

export const getallBlogs = async (req, res) => {
  const allBlogs = await blog.find();

  res.status(200).json({
    success: true,
    allBlogs: allBlogs,
    message: "all Blog feteched successfully",
  });
};

export const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  
  if(!id){
    return res.status(400).json({
        success: false,
        message: "id not found",
      });
  }
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
        success: false,
        message: "id invalid",
      });
  }
  const getSingleBlog = await blog.findById(id);
  if (!getSingleBlog) {
   return res.status(200).json({
      success: false,
      message: "blog not found",
    });
  }

  res.status(200).json({
    success: true,
    getSingleBlog: getSingleBlog,
    message: "Blog feteched successfully",
  });
};

export const getMyBlog = async(req,res)=>{
    const createdBy = req.user._id;
    const myBlogs = await blog.find({createdBy})
    res.status(200).json({
        success:true,
        myBlogs:myBlogs
    })
}
    
export const updateBlog = async(req,res)=>{
const {id} = req.params;
if(!id){
    return res.status(200).json({
        success: false,
        message: "id not found",
      });
  }

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
        success: false,
        message: "id invalid",
      });
  }

const update = await blog.findByIdAndUpdate(id,req.body,{new:true})
if(!update){
    return res.status(400).json({
        success: false,
        message: "blog not update",
      })
}
res.status(200).json({
    success:true,
    data:update,
    message: "blog updated"
  })
}
