import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/users/myProfile`, { withCredentials: true }
        );
        setMyProfile(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyProfile();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 py-16">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center -mt-16">
          <img
            src={myProfile?.photo?.url}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-gray-800">{myProfile?.name}</h2>
          <p className="text-gray-600 mt-2">{myProfile?.email}</p>
          <p className="text-gray-600 mt-2">{myProfile?.phone}</p>
          <p className="text-gray-600 mt-2">{myProfile?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
