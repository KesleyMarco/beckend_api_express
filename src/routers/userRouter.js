import express from "express"
import { getUsersController } from "../controller/user/getUsersController.js"
import { createUserController } from "../controller/user/createUserController.js"
import { deleteUserController } from "../controller/user/deleteUserController.js"  
import { updateAvatarController } from "../controller/user/updateAvatarController.js"   
import { updateUserController } from "../controller/user/updateUserController.js" 

const router = express.Router()

router.get('/', getUsersController)
router.post('/', createUserController)
router.put('/', updateUserController)
router.patch('/', updateAvatarController) 
router.delete('/', deleteUserController)

export default router