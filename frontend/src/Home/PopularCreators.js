import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Utils"; 

const PopularCreators = () => {
  const [admin, setAdmin] = useState("");
  const PopularCreator = async () => {
    try {
      const { data } = await axios.get(
    `${BACKEND_URL}/api/users/getAllAdmin`
      );

      setAdmin(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PopularCreator();
  }, []);

  console.log("admin :", admin);

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-semibold text-2xl text-left mb-6">Popular Creators</h1>
      <div className="rounded-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 ld:grid-cols-5 ml-20 gap-2">
        {admin && admin.length > 0 ? (
          admin.map((element) => (
            <div>
                <div className="relative">
                  <img
                    src={element.photo.url}
                    alt=""
                    className="w-full md:w-32 md:h-32 border border-black object-cover rounded-full items-center"
                  />
                </div>
                <div className="text-center md:ml-[-150px] items-center">
                  <p>{element.name}</p>
                  <p className="text-gray-600 text-xs">{element.role}</p>
                </div>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default PopularCreators;
