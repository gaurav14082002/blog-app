import mongoose from "mongoose";

export const blogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  blogImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  about: {
    type: String,
    required: true,
    minlength:[200,"should contain atleast 200 character"]
  },
  adminPhoto: {
    type: String,
    required: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
  }
});

export default mongoose.model("blog",blogSchema)