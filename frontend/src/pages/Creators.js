import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from "../Utils"; 

function Creator() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/getAllAdmin`
        );
        setCreators(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-white space-y-12">
        <h1 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-8">
          Meet Our Creators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <div key={creator._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={creator.photo.url}
                  alt="avatar"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                  <img
                    src={creator.photo.url}
                    alt="avatar"
                    className="w-16 h-16 rounded-full mx-auto border-4 border-white"
                  />
                </div>
              </div>
              <div className="px-4 py-4">
                <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">
                  {creator.name}
                </h2>
                <p className="text-center text-gray-600 text-sm">{creator.email}</p>
                <p className="text-center text-gray-600 text-sm">{creator.phone}</p>
                <p className="text-center text-gray-600 text-sm">{creator.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creator;
