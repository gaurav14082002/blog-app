import axios from "axios"; 
import React, { useState } from "react"; 
import { ToastContainer, toast } from "react-toastify"; 

function CreateBlog() {
  const [title, setTitle] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [about, setAbout] = useState("");

  const [blogImage, setBlogImage] = useState(""); 
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => { 
    const file = e.target.files[0]; 
    const reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = () => { 
      setBlogImagePreview(reader.result); 
      setBlogImage(file); 
    }; 
  };

  const handleCreateBlog = async (e) => { 
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append("title", title); 
    formData.append("category", category); 
    formData.append("about", about); 
    formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/create`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(data.message || "Blog created successfully");

      setTitle(""); 
      setCategory(""); 
      setAbout(""); 
      setBlogImage(""); 
      setBlogImagePreview(""); 
    } catch (error) { 
      toast.error(error.message || "Please fill the required fields"); 
    } 
  };

  return (
    <div className="bg-gradient-professional min-h-screen py-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-xl">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-10">Create Blog</h3>
        <form onSubmit={handleCreateBlog} className="space-y-8">
          <div className="space-y-4">
            <label className="block text-xl font-medium text-gray-800">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Category</option>
              <option value="Devotion">Devotion</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-medium text-gray-800">Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-medium text-gray-800">Blog Image</label>
            <div className="flex justify-center mb-4">
              <img
                src={blogImagePreview ? `${blogImagePreview}` : "/imgPL.webp"}
                alt="Blog Image"
                className="w-full max-w-md h-auto rounded-lg shadow-sm"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-xl font-medium text-gray-800">About</label>
            <textarea
              rows="6"
              placeholder="Write something about your blog"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
