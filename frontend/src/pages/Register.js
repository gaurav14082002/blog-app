import React, { useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AppContext } from "../Context/AppContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const{setProfile,isAuthenicated, setIsAuthenicated} =useContext(AppContext);
  const naviageto = useNavigate();

  function photoHandler(event) {
    console.log(event)
    const file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      if(file){
        setPhoto(file)
      }
    };
  }

  const registerHandler = async (e) => {
    e.preventDefault(); 
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("number", number);
    formdata.append("password", password);
    formdata.append("photo", photo);
    formdata.append("role", role);
    formdata.append("education", education)
      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/signup",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      console.log("response : ",response.data);
      alert("user register successfully");
      setProfile(response?.data);
      setIsAuthenicated(true);
      setEducation("")
      setEmail("")
      setName("")
      setNumber("")
      setPassword("")
      setPhoto("")
      setPhotoPreview("")
      setRole("")
      naviageto("/")
    } catch (error) {
      console.log(error);
      alert("unable to register user");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-8 max-h-[90vh] overflow-auto">
          <form onSubmit={registerHandler}>
            <div className="font-semibold text-xl items-center text-center">
              Cilli<span className="text-blue-500">Blog</span>
            </div>
            <h1 className="font-semibold text-left mb-4">Register</h1>
            <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full p-1 mb-4 border rounded-md">
              <option >Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            <div className="mb-4">
              <input
                type="name"
                placeholder="Your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Your phone number"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <select
              value={education}
              onChange={(e)=>setEducation(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
            >
              <option>Select Your Education</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="BBA">BBA</option>
            </select>

            <div className="flex items-center mb-4">
              <div className="photo w-20 h-20 mr-4">
                <img src={photoPreview || null} alt="photo" />
              </div>
              <input
                type="file"
                onChange={photoHandler}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="text-center mb-4">
              Already registered?
              <Link className="text-blue-600" to="/login">
                Login Now
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
