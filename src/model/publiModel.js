import {prisma} from '../helpers/dbConnection.js'

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    })
}

export const getpublications = async () => {
    return await prisma.publication.findMany()
}