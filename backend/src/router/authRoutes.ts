import express, { Router , Request , Response} from "express";
import { login } from '../controller/authController'

const route:Router = express.Router();



route.post("/login",login);

export default route