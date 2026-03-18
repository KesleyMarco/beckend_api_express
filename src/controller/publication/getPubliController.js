import { getpublications } from '../../model/publiModel.js'
export async function getPubliController(req, res) {
  const result = await getpublications()
  res.json({
    message: "Publications retrieved successfully",
    publications: result
  })
}   