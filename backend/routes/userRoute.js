import express from "express";
import { signup,login,logout,myProfile,getAllAdmin } from "../controllers/userController.js";
import {isAuthenticated} from "../middlewares/auth.js"

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.get("/logout",isAuthenticated,logout)
router.get("/myProfile",isAuthenticated,myProfile)
router.get("/getAllAdmin",getAllAdmin)

export default router;