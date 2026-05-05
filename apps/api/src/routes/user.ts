import Express,{Router} from "express"
import authenticateUser from "../controllers/authentication"

const UserSignUp = Express.Router()
const UserSignIn = Express.Router()

UserSignIn.get("/",authenticateUser)
UserSignUp.post("/",)