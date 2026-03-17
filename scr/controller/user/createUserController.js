import { createUser } from '../model/userModel.js'

export async function createUserController(req, res) {

  const user = {
    avatar: "https://github.com/kesleymarco.png",
    name: "kesleymarco",
    email: "kesleyreis07@gmail.com",
    pass: "12345678"

  }

  const result = await createUser(user)

  res.json({
    message: "User created successfully",
    user: result
  })
}