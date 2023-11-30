import express, { Router , Request , Response} from "express";
import { login , register , test , checkUser } from '../controller/authController'
import { validateUser } from '../middleware/middleware'

const route:Router = express.Router();



route.post("/login",login);
route.post("/register",register);
route.post("/test",validateUser,test);
route.get("/checkUser",checkUser);

export default route