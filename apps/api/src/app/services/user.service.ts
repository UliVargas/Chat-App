import { User } from '../../database/entities'
import { AppDataSource } from '../../database/ormconfig'

const userRepository = AppDataSource.getRepository(User)

export const getAllUsersService = async () => {
  try {
    return await userRepository.find()
  } catch (error) {
    throw Error(error)
  }
}

export const findUserByIdService = async (userId: string) => {
  try {
    return await userRepository.findOneByOrFail({ id: userId })
  } catch (error) {
    error.status = 404
    throw error
  }
}
