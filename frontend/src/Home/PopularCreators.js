import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Utils";

const PopularCreators = () => {
  const [admin, setAdmin] = useState("");

  const PopularCreator = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/getAllAdmin`
      );
      setAdmin(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PopularCreator();
  }, []);

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
        Popular Creators
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {admin && admin.length > 0 ? (
          admin.map((element) => (
            <div
              key={element._id}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={element.photo.url}
                  alt=""
                  className="w-28 h-28 border-4 border-indigo-300 object-cover rounded-full mx-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {element.name}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  {element.role}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center text-gray-500">
            No creators available
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCreators;
