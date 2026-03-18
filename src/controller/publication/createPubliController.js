import { createPublication } from '../../model/publiModel.js'

export async function createPubliController(req, res) {
  const publication = req.body;
  
  const result = await createPublication(publication)

  res.json({
    message: "Publication created successfully",
    publication: result
  })
}