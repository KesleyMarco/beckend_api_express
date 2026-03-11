import { createUser } from '../model/userModel.js'

export async function createUserController(req, res) {

  const user = {
    avatar: "https://github.com/kesleymarco.png",
    name: "kesleymarco",
    email: "kesleyreis07@gmail.com"
    pass: "123456"

  }

  const result = await createUser(user)

  res.json
}