import { Chat } from '../../database/entities'
import { AppDataSource } from '../../database/ormconfig'
import { findUserByIdService } from './user.service'

const chatRepository = AppDataSource.getRepository(Chat)

export const createchatService = async (payload: any) => {
  const { firstUserId, secondUserId } = payload
  try {
    const chat = await getAllChatsByUsersService(firstUserId, secondUserId)
    if (chat) {
      return chat
    }

    const firstUser = await findUserByIdService(firstUserId)
    const secondUser = await findUserByIdService(secondUserId)

    const newChat = new Chat()
    newChat.users = [firstUser, secondUser]
    return await chatRepository.save(newChat)
  } catch (error) {
    throw Error(error)
  }
}

export const findChatById = async (chatId: string) => {
  try {
    return await chatRepository.findOneOrFail({ where: { id: chatId }, relations: { users: true } })
  } catch (error) {
    error.status = 404
    error.message = 'Chat not found'
    throw error
  }
}

export const getAllChatsByUserService = async (userId: string) => {
  try {
    return await chatRepository
      .createQueryBuilder('chat')
      .innerJoin('chat.users', 'users')
      .leftJoinAndSelect('chat.users', 'loadedUsers')
      .where('users.id = :id', { id: userId })
      .getMany()
  } catch (error) {
    error.status = 404
    error.message = 'Chat not found'
    throw error
  }
}

export const getAllChatsByUsersService = async (firstUserId: string, secondUserId: string) => {
  try {
    return await chatRepository
      .createQueryBuilder('chat')
      .innerJoin('chat.users', 'users')
      .where('users.id = :id', { id: firstUserId })
      .andWhere('users.id = :id', { id: secondUserId })
      .getOne()
  } catch (error) {
    error.status = 404
    error.message = 'Chat not found'
    throw error
  }
}
