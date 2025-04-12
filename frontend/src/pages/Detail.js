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
        `${BACKEND_URL}/api/blog/getSingleBlog/${id}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message || "blog detail fetched successfully");
      setBlog(data?.getSingleBlog);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  console.log(blog);

  return (
    <div>
      <div>
        {blog && (
          <section className="container mx-auto p-4">
            <h2 className="text-blue-500 uppercase text-xs font-bold mb-4">
              {blog?.category}
            </h2>

            <div className="text-4xl font-bold mb-6">{blog?.title}</div>

            <div className="flex items-center mb-6">
              <img
                src={blog?.adminPhoto}
                alt="author.avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="text-lg font-semibold">{blog?.adminName}</p>
            </div>

            <div className="flex flex-col md:flex-row">
              {blog?.blogImage && (
                <img
                  src={blog?.blogImage?.url}
                  alt="mainBlogImg"
                  className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg cursor-pointer border"
                />
              )}

              <div className="md:w-1/2 w-full md:pl-6">
                <p className="text-lg mb-6">{blog?.about}</p>
                {/* Add more content here if needed */}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
export default Detail;
