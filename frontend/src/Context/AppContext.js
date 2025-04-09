import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState();
  const [isAuthenicated, setIsAuthenicated] = useState(false);

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/blog/getAllBlogs"
      );
      const data = await response.json();
      // console.log("Response Data:", data);
      setBlogs(data.allBlogs); // Correct key to access blogs
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchProfile = async () => {
    try {
        const response = await axios.get(
          "http://localhost:8000/api/users/myProfile",
          { withCredentials: true } // Send cookies automatically
        );
        // console.log("Response Data of Profile:", response);
        setProfile(response.data);
        setIsAuthenicated(true)
    } catch (error) {
      console.error("Error fetching Profile info:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchProfile();
  }, []);

  const valueObj = { blogs, profile,setProfile, isAuthenicated, setIsAuthenicated };

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
