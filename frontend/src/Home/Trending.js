import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
  const { blogs } = useContext(AppContext);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div className="container mx-auto p-8 mb-12">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
        🔥 Trending Now
      </h1>

      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => (
            <Link
              to={`/blog/${element._id}`}
              key={element._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2"
            >
              <div className="relative w-full h-48 overflow-hidden group">
                <img
                  src={element.blogImage.url}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:text-yellow-300">
                  {element.title}
                </h1>
              </div>

              <div className="p-4 flex items-center">
                <img
                  src={element.adminPhoto}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-pink-400 shadow-md"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{element.adminName}</p>
                  <p className="text-xs text-white">Admin</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-48 items-center justify-center text-gray-500">
            Loading...
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default Trending;
