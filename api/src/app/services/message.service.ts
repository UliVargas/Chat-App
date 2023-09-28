import { Message } from '../../database/entities'
import { AppDataSource } from '../../database/ormconfig'
import { findChatById } from './chat.service'
import { findUserByIdService } from './user.service'

const messageRepository = AppDataSource.getRepository(Message)

export const createMessageService = async (payload: any) => {
  const { chatId, userId, text } = payload
  try {
    const chat = await findChatById(chatId)
    const user = await findUserByIdService(userId)

    const message = new Message()
    message.chat = chat
    message.text = text
    message.user = user
    return await messageRepository
      .createQueryBuilder()
      .insert()
      .into(Message)
      .values([message])
      .execute()
  } catch (error) {
    console.log(error);
    
    throw Error(error)
  }
}

export const getMessagesByChatService = async (chatId: string) => {
  try {
    return await messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.chat', 'chat')
      .where('chat.id = :id', { id: chatId })
      .orderBy('message.createdAt', 'ASC')
      .getMany()
  } catch (error) {
    throw error
  }
}