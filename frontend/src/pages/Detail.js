import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../Utils";

function Detail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

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
      toast.success(data.message || "Blog detail fetched successfully");
      setBlog(data?.getSingleBlog);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Failed to fetch blog details");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {blog && (
          <>
            <h2 className="text-lg text-gray-500 uppercase font-semibold mb-4">
              {blog?.category}
            </h2>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog?.title}</h1>

            <div className="flex items-center mb-8">
              <img
                src={blog?.adminPhoto}
                alt="author-avatar"
                className="w-14 h-14 rounded-full mr-4"
              />
              <p className="text-lg font-semibold text-gray-700">{blog?.adminName}</p>
            </div>

            {blog?.blogImage && (
              <img
                src={blog?.blogImage?.url}
                alt="blog image"
                className="w-full rounded-lg shadow-md mb-8"
              />
            )}

            <div className="text-lg text-gray-700 leading-relaxed">{blog?.about}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
