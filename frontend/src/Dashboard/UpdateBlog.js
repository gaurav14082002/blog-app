import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BACKEND_URL } from "../Utils"; 

const UpdateBlog = () => {
  const { id } = useParams();
  console.log("id :", id);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const navigateto = useNavigate();
  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
       `http://localhost:8000/api/blog/getSingleBlog/${id}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message || "blog created successfully");
      setTitle(data?.getSingleBlog?.title);
      setCategory(data?.getSingleBlog?.category);
      setAbout(data?.getSingleBlog?.about);
      setBlogImage(data?.getSingleBlog?.blogImage?.url);
      setBlogImagePreview(data?.getSingleBlog?.blogImage?.url);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);
    formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.put(
   `http://localhost:8000/api/blog/updateBlog/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(data);
      toast.success(data.message || "blog updated successfully");
      navigateto("/home");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  };

  return (
    <div>
      <div className="min-h-screen py-10">
        <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-8">Create Blog</h3>
          <form onSubmit={handleUpdateBlog} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-lg">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              >
                <option value="">Select Category</option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-lg">Title</label>
              <input
                type="text"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              />
            </div>

            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
            />
            <div className="space-y-2">
              <label className="block text-lg">About</label>
              <textarea
                rows="5"
                placeholder="Write something about your blog"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              />
            </div>

            <button
              onClick={handleUpdateBlog}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
