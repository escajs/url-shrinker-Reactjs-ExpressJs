import express from 'express'
import {getUserData} from "./../Controllers/AuthorizedUserLinks.js";
import auth from './../Middleware/auth.js'
const router = express.Router()

router.get('/',auth,getUserData)

export default router