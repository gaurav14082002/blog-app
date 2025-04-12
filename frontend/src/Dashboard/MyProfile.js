import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from "../Utils"; 

const MyProfile = () => {

  const [myProfile, setMyProfile] = useState([]);

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/users/myProfile`,{withCredentials:true}
        );
        setMyProfile(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyProfile();
  }, []);

  console.log("my profile :",myProfile)

  return (
    <div className='flex flex-wrap justify-center items-center my-20 bg-gray-100'>
  
      <div key={myProfile._id} className='bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full m-2'>
        <div className='relative'>
          <img
            src={myProfile?.photo?.url}
            alt='avatar'
            className='w-full h-32 object-cover'
          />
          <div className='absolute inset-x-0 bottom-0 transform translate-y-1/2'>
            <img
              src={myProfile?.photo?.url}
              alt='avatar'
              className='w-16 h-16 rounded-full mx-auto border-4 border-gray-700'
            />
          </div>
        </div>
        <div className='px-6 py-6'>
          <h2 className='text-center text-xl font-semibold text-gray-800'>
            {myProfile.name}
          </h2>
          <p className='text-center text-gray-600 mt-2'>{myProfile.email}</p>
          <p className='text-center text-gray-600 mt-2'>{myProfile.phone}</p>
          <p className='text-center text-gray-600 mt-2'>{myProfile.role}</p>
        </div>
      </div>
  </div>
  )
}

export default MyProfile
