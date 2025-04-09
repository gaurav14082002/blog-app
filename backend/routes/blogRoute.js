import express from "express";
const router = express.Router();
import {isAuthenticated,isAdmin} from "../middlewares/auth.js"

import {createBlog,deleteBlog,getallBlogs,getSingleBlog,getMyBlog,updateBlog} from "../controllers/blogController.js"

router.post("/create",isAuthenticated,isAdmin,createBlog);
router.delete("/delete/:id",isAuthenticated,isAdmin,deleteBlog)
// router.get("/getAllBlogs",isAuthenticated,getallBlogs)
router.get("/getAllBlogs",getallBlogs)

router.get("/getSingleBlog/:id",isAuthenticated,getSingleBlog)
router.get("/getMyBlog",isAuthenticated,isAdmin,getMyBlog)
router.put("/updateBlog/:id",isAuthenticated,isAdmin,updateBlog)


export default router;