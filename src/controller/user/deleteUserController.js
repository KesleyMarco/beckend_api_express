import { deleteUser } from '../../model/userModel.js'

export async function deleteUserController(req, res) {
  const id = req.params.id

  const result = await deleteUser(+id) // O + é para converter a string id em número, pois o prisma espera um número

  if (!result) 
    return res.json({ message: `Erro ao deletar Usuario id: ${id}` })

  return res.json({ 
    message: 'Usuario deletado com sucesso',
    user: result 
  })
}
