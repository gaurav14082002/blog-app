import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../Utils"; 


const Navbar = () => {
  const [show, setShow] = useState(false);
  const {profile, isAuthenicated, setIsAuthenicated} = useContext(AppContext);
  const Navigate = useNavigate()
  // console.log("profile  :",profile,isAuthenicated);


  const logoutHandler = async (event) => {
    event.preventDefault();
    try {
      const logout = await axios.get(`${BACKEND_URL}/api/users/logout`, {
        withCredentials: true,
      });
      toast.success("logout successfully");
      setIsAuthenicated(false);
      Navigate("/login")
    } catch (error) {
      alert("failed to logout")
    }
  };


  return (
    <div>
      <nav className="shadow-lg py-1 px-4 bg-blue-300">
        <div className="flex justify-between container mx-auto">
          <div className="font-semibold text-xl">
            Cilli<span className="text-blue-500">Blog</span>
          </div>

          <ul className="hidden md:flex flex space-x-6">
            <Link to="/" className="hover:text-blue-500 duration-300">
              HOME
            </Link>
            <Link to="/blogs" className="hover:text-blue-500 duration-300">
              BLOGS
            </Link>
            <Link to="/creators" className="hover:text-blue-500 duration-300">
              CTREATORS
            </Link>
            <Link to="/about" className="hover:text-blue-500 duration-300">
              ABOUT
            </Link>
            <Link to="/contact" className="hover:text-blue-500 duration-300">
              CONTACT
            </Link>
          </ul>
          <div onClick={() => setShow(!show)} className="md:hidden ml-auto">
            {show ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>

          <div className="space-x-2 flex">
            {isAuthenicated && profile?.data?.role==="admin" ?
             (<Link
              to="/dashboard"
              className="bg-blue-600 hidden md:flex text-white font-semibold hover:bg-blue-800 duration-300 px-4 
              py-1 rounded-md"
            >
              DASHBOARD
            </Link>):("")}
            
            {!isAuthenicated ?(<Link
              to="/Login"
              className="bg-red-600 hidden md:flex text-white font-semibold hover:bg-red-800 duration-300 px-4 py-1 rounded-md"
            >
              LOGIN
            </Link>):
            (<div>
              <button onClick={logoutHandler}
            className="bg-red-600 hidden md:flex text-white font-semibold hover:bg-red-800 duration-300 px-4 py-1 rounded-md"
          >
            LOGOUT</button>
            </div>)}
          </div>
        </div>
        {show && (
          <div>
            <ul className="flex flex-col items-center justify-center h-screen">
              <Link to="/" className="hover:text-blue-500 duration-300">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-blue-500 duration-300">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-blue-500 duration-300">
                CTREATORS
              </Link>
              <Link to="/about" className="hover:text-blue-500 duration-300">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-blue-500 duration-300">
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
