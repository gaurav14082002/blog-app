import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
  const { blogs } = useContext(AppContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto gap-4 p-6">
      <h1 className="text-2xl font-semibold text-left mb-4">Trending</h1>
      <Carousel responsive={responsive}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => (
            <Link
            to={`/blog/${element._id}`}
              key={element._id}
              className="bg-white rounded-lg hover:shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 "
            >
              <div className="w-full h-32 bg-gray-200 flex justify-center items-center overflow-hidden group relative">
                <img
                  src={element.blogImage.url}
                  alt=""
                  className="max-h-full max-w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100"></div>

                <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                  {element.title}
                </h1>
              </div>

              <div className="p-1 flex items-center">
                <img
                  src={element.adminPhoto}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-yellow-300"
                />
                <div>
                  <p>{element.adminName}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center">loading</div>
        )}
      </Carousel>
    </div>
  );
};

export default Trending;
