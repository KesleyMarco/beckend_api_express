import { updateUser } from '../../model/userModel.js'

export async function updateUserController(req, res) {
  const {id} = req.params
  const user = req.body

  const result = await updateUser(user, +id) // O + é para converter a string id em número, pois o prisma espera um número

  return res.json({ 
    message: 'Usuario atualizado com sucesso',
    user: result 
  })
  
}