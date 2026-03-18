import { getUsers } from '../../model/userModel.js'
export async function getUsersController(req, res) {

  const result = await getUsers()

  res.json({
    message: "Users retrieved successfully",
    users: result
  })
}