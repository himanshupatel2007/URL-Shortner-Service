import Express,{Router} from "express"

import shortUrl from "../controllers/shortURL"
import redirectUrl from "../controllers/redirectURL"

const UrlRouter = Express.Router();

UrlRouter.post("/",shortUrl)
UrlRouter.get("/:id",redirectUrl)