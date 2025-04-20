import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useContext(AppContext);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-8">
          Discover Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs && blogs.length > 0 ? (
            blogs.map((element) => (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="group relative">
                  <img
                    src={element.blogImage.url}
                    alt={element.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <h1 className="absolute bottom-4 left-4 text-white text-lg font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                    {element.title}
                  </h1>
                </div>

                <div className="p-4 flex items-center space-x-4">
                  <img
                    src={element.adminPhoto}
                    alt={element.adminName}
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{element.adminName}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-white">
              <p>No blogs available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
