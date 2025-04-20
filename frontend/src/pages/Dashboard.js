import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Sidebar from "../Dashboard/Sidebar";
import MyProfile from "../Dashboard/MyProfile";
import CreateBlog from "../Dashboard/CreateBlog";
import MyBlogs from "../Dashboard/MyBlogs";
import UpdateBlogs from "../Dashboard/UpdateBlog";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isAuthenicated, setIsAuthenicated } = useContext(AppContext);
  const [component, setComponent] = useState("my blogs");
  const navigate = useNavigate();

  if (!isAuthenicated) {
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="ml-28">
        <Sidebar
          component={component}
          setComponent={setComponent}
          setIsAuthenicated={setIsAuthenicated}
        />
        {component === "my profile" ? (
          <MyProfile />
        ) : component === "create blog" ? (
          <CreateBlog />
        ) : component === "update blogs" ? (
          <UpdateBlogs />
        ) : (
          <MyBlogs />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
