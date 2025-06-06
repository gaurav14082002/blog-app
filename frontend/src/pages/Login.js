import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../Context/AppContext";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { setProfile, isAuthenticated, setIsAuthenicated } = useContext(AppContext);
  const navigateTo = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      toast.error("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/users/login`, 
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response && response.data) {
        toast.success("User logged in successfully.");
        setIsAuthenicated(true);
        setProfile(response.data);
        setEmail("");
        setPassword("");
        setRole("");
        navigateTo("/"); // Redirect to homepage after successful login
      } else {
        toast.error("Login failed: No data in response.");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response?.data?.message || "An error occurred during login.");
      } else {
        toast.error("Network error or CORS issue.");
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-8 max-h-[90vh] overflow-auto">
          <form onSubmit={loginHandler}>
            <div className="font-semibold text-xl items-center text-center">
              Cilli<span className="text-blue-500">Blog</span>
            </div>
            <h1 className="font-semibold text-left mb-4">Login</h1>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-1 mb-4 border rounded-md"
            >
              <option>Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="text-center mb-4">
              New User? 
              <Link className="text-blue-600" to="/register">
                Register Now
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
