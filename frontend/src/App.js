import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Dashboard from "../src/pages/Dashboard";
import Register from "../src/pages/Register";
import Blogs from "../src/pages/Blogs";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import Contact from "../src/pages/Contact";
import Creators from "../src/pages/Creators";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UpdateBlog from "./Dashboard/UpdateBlog";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound"
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const location = useLocation();
  const hideNavBarFooter = location.pathname.toLowerCase().startsWith("/dashboard") ||
                         location.pathname.toLowerCase().startsWith("/login") ||
                         location.pathname.toLowerCase().startsWith("/register");

const {isAuthenicated} = useContext(AppContext);
console.log(isAuthenicated)

  return (
    <div className="App ">
      <ToastContainer></ToastContainer>
      {!hideNavBarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={isAuthenicated===true ? <Home /> : <Navigate to={"/login"}/> } />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creator" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog/>}></Route>
        <Route path="/blog/:id" element={<Detail />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {!hideNavBarFooter && <Footer />}

    </div>
  );
}
export default App;
