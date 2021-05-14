import express from 'express'
import auth from '../Middleware/auth.js';
import { getLinks,postLink,deleteLink } from "./../Controllers/Urls.js";
const router = express.Router()

router.get('/',getLinks)
router.post('/newLink',auth,postLink)
router.delete('/:id',auth,deleteLink)

export default router