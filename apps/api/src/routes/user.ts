import Express,{Router} from "express"

const UserSignUp = Express.Router()
const UserLogin = Express.Router()
const UserRouter = Express.Router()

UserLogin.get("/",)
UserSignUp.post("/",)
UserRouter.route("/:id").get().post().delete()