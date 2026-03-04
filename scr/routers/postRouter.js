import express from "express"
import { getPostController } from "../controller/post/getPostController.js"
import { createPostController } from "../controller/post/createPostController.js"
import { updatePostController } from "../controller/post/updatePostController.js"  
import { deletePostController } from "../controller/post/deletePostController.js"
import { updatePetController } from "../controller/post/updatePetController.js" 

const router = express.Router()

router.get('/', getPostController)
router.post('/', createPostController)
router.put('/', updatePostController)
router.delete('/', deletePostController) 
router.patch('/', updatePetController)   

export default router
