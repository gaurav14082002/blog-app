import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

const Sidebar = ({ component, setComponent, setIsAuthenicated }) => {
  const [show, setShow] = useState(true);

  const { profile } = useContext(AppContext);
  const navigate = useNavigate();
  // console.log(profile);

  const logoutHandler = async (event) => {
    event.preventDefault();
    try {
      const logout = await axios.get("http://localhost:8000/api/users/logout", {
        withCredentials: true,
      });
      toast.success("logout successfully");
      setIsAuthenicated(false);
      navigate("/login")
    } catch (error) {
      alert(error.response.message || "failed to logout")
    }
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <div
        className="sm:hidden fixed top-4 left-4 z-50"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>

      {/* Sidebar */}
      <div
         className={`
          w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-50
          transform transition-transform duration-300 z-40
          ${show ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        {/* Close Button */}
        <div
          className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>

        <div className="text-center">
          <img
            src={profile?.data?.photo?.url}
            alt=""
            className="w-24 h-24 rounded-full mx-auto mb-2"
          ></img>
          <p className="text-lg font-semibold">{profile?.data?.name}</p>
        </div>
        <ul className="space-y-6 mx-4">
          <button
            onClick={() => setComponent("my blogs")}
            className="w-full py-2 bg-green-500 hover:bg-green-700 transition duration-300"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => setComponent("create blog")}
            className="w-full py-2 bg-pink-500 hover:bg-pink-700 transition duration-300"
          >
            CREATE BLOG
          </button>
          <button
            onClick={() => setComponent("my profile")}
            className="w-full py-2 bg-red-500 hover:bg-red-700 transition duration-300"
          >
            MY PROFILE
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 bg-blue-500 hover:bg-blue-700 transition duration-300"
          >
            HOME
          </button>
          <button
            onClick={logoutHandler}
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-700 transition duration-300"
          >
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
