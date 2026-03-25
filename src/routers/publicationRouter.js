import express from "express"
import { getPubliController } from "../controller/publication/getPubliController.js"
import { createPubliController } from "../controller/publication/createPubliController.js"
import { updatePubliController } from "../controller/publication/updatePubliController.js"  
import { deletePubliController } from "../controller/publication/deletePubliController.js"
import { updatePetController } from "../controller/publication/updatePetController.js" 

const router = express.Router()

router.get('/', getPubliController)
router.post('/', createPubliController)
router.put('/:id', updatePubliController)
router.delete('/:id', deletePubliController) 
router.patch('/', updatePetController)   

export default router
