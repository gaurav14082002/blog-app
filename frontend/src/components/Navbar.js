import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { profile, isAuthenicated, setIsAuthenicated } = useContext(AppContext);
  const navigate = useNavigate();

  const logoutHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.get(`http://localhost:8000/api/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logout successfully");
      setIsAuthenicated(false);
      navigate("/login");
    } catch (error) {
      alert("Failed to logout");
    }
  };

  return (
    <div className="shadow-md sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="font-bold text-2xl">
            Cilli<span className="text-yellow-300">Blog</span>
          </div>

          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              HOME
            </Link>
            <Link to="/blogs" className="hover:text-yellow-300 transition duration-300">
              BLOGS
            </Link>
            <Link to="/creators" className="hover:text-yellow-300 transition duration-300">
              CREATORS
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300">
              ABOUT
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
              CONTACT
            </Link>
          </ul>

          <div onClick={() => setShow(!show)} className="md:hidden cursor-pointer ml-auto text-white">
            {show ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>

          <div className="space-x-2 hidden md:flex">
            {isAuthenicated && profile?.data?.role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded transition duration-300"
              >
                DASHBOARD
              </Link>
            )}

            {!isAuthenicated ? (
              <Link
                to="/login"
                className="bg-white text-indigo-600 font-semibold hover:bg-indigo-200 px-4 py-1 rounded transition duration-300"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={logoutHandler}
                className="bg-white text-red-600 font-semibold hover:bg-red-200 px-4 py-1 rounded transition duration-300"
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>

        {show && (
          <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden text-white text-lg font-medium">
            <Link to="/" onClick={() => setShow(false)} className="hover:text-yellow-300">HOME</Link>
            <Link to="/blogs" onClick={() => setShow(false)} className="hover:text-yellow-300">BLOGS</Link>
            <Link to="/creators" onClick={() => setShow(false)} className="hover:text-yellow-300">CREATORS</Link>
            <Link to="/about" onClick={() => setShow(false)} className="hover:text-yellow-300">ABOUT</Link>
            <Link to="/contact" onClick={() => setShow(false)} className="hover:text-yellow-300">CONTACT</Link>

            {isAuthenicated && profile?.data?.role === "admin" && (
              <Link to="/dashboard" onClick={() => setShow(false)} className="text-yellow-300">DASHBOARD</Link>
            )}

            {!isAuthenicated ? (
              <Link to="/login" onClick={() => setShow(false)} className="text-green-300">LOGIN</Link>
            ) : (
              <button onClick={(e) => { logoutHandler(e); setShow(false); }} className="text-red-300">LOGOUT</button>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
