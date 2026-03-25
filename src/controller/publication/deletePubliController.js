import { deletePublication } from '../../model/publiModel.js'

export async function deletePubliController(req, res) {
  const id = req.params.id

  const result = await deletePublication(+id) // O + é para converter a string id em número, pois o prisma espera um número

  if (!result) 
    return res.json({ message: `Erro ao deletar Publicação id: ${id}` })

  return res.json({ 
    message: 'Publicação deletada com sucesso',
    publication: result 
  })
}