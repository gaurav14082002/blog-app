import React, { useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import { Link } from 'react-router-dom';

const Hero = () => {
  const { blogs } = useContext(AppContext);

  return (
    <div className="container mx-auto my-16 px-6 md:px-12">
      <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-300">
        Featured Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 4).map((element) => (
            <Link
              to={`/blog/${element._id}`}
              key={element._id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="group relative overflow-hidden rounded-t-xl">
                <img
                  src={element.blogImage.url}
                  alt={element.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <h1 className="absolute bottom-4 left-4 text-white text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                  {element.title}
                </h1>
              </div>

              <div className="p-4 flex items-center">
                <img
                  src={element.adminPhoto}
                  alt={element.adminName}
                  className="w-10 h-10 rounded-full border-2 border-indigo-400"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">{element.adminName}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-96 items-center justify-center text-gray-500 col-span-full">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
