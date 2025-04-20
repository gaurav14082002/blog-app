import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/getMyBlog`,
        { withCredentials: true }
      );
      console.log("response of backend : ", data);
      setMyBlogs(data.myBlogs);
      toast.success("Blogs fetched successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch blogs");
    }
  };

  const deleteHandler = async (id) => {
    try {
      console.log("Deleting blog with ID:", id);
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/blog/delete/${id}`,
        { withCredentials: true }
      );
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== id));
      toast.success(res.data.message || "Blog deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto my-12 p-6">
      <ToastContainer />
      <div className="grid md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 md:ml-20">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((element) => (
            <div
              key={element._id}
              className="bg-white rounded-lg hover:shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/blog/${element._id}`}>
                <div className="group relative">
                  <img
                    src={element?.blogImage?.url}
                    alt=""
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100"></div>
                  <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                    {element.title}
                  </h1>
                </div>
              </Link>

              <div className="flex justify-between mt-4 px-4 pb-4">
                <Link
                  to={`/updateBlog/${element._id}`}
                  className="text-blue-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                >
                  <button>Update</button>
                </Link>
                <button
                  onClick={() => deleteHandler(element._id)}
                  className="text-red-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">You have not posted any blogs.</p>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
