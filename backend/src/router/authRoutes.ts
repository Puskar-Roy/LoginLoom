import express, { Router , Request , Response} from "express";
import { login , register} from '../controller/authController'


const route:Router = express.Router();



route.post("/login",login);
route.post("/register",register);

export default route