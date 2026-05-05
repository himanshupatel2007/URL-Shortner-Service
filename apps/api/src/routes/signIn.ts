import Express, { Router }   from "express";
import authenticateUser from "../controllers/authentication"

const UserSignIn = Express.Router()

UserSignIn.get("/",authenticateUser)