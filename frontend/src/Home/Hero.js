import React, { useContext } from 'react'
import {AppContext} from "../Context/AppContext"
import { Link } from 'react-router-dom';

const Hero = () => {
  const {blogs} = useContext(AppContext);
  // console.log(blogs);
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {blogs && blogs.length > 0 ? (
        blogs.slice(0, 4).map((element) => (
          <Link to={`/blog/${element._id}`} key={element._id} className="bg-white rounded-lg hover:shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className=" group relative">
              <img src={element.blogImage.url} alt="" className="w-full h-32 object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100"></div>
               
              <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                {element.title}
              </h1>
            </div>

            <div className='p-1 flex items-center'>
              <img src={element.adminPhoto} alt="" className='w-12 h-12 rounded-full border-2 border-yellow-300' />
              <div>
                <p>{element.adminName}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex h-screen items-center justify-center">loading</div>

      )}
    </div>
  );
}

export default Hero;
