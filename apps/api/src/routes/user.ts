import Express,{Router} from "express"

import deleteUser from "../controllers/deleteUser"
import updateUser from "../controllers/updateUser"
import getUser from "../controllers/getUser"
import userLogin from "../controllers/userLogin"
import userSignUp from "../controllers/userSignUp"
import passwordHash from "../middlewares/paswordHash"

const UserSignUp = Express.Router()
const UserLogin = Express.Router()
const UserRouter = Express.Router()

UserLogin.post("/",userLogin)
UserSignUp.post("/",passwordHash,userSignUp)
UserRouter.route("/:id").get(getUser).post(updateUser).delete(deleteUser)