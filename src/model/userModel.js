import {prisma} from '../helpers/dbConnection.js'

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.user.findMany()
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: user
    })
}
