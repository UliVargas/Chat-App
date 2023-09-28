import { Request, Response } from 'express'
import { getMessagesByChatService, createMessageService } from '../services/message.service'

export const createMessage = async (req:Request, res: Response) => {
  try {
    const message = await createMessageService(req.body)
    res.status(201).json(message)
  } catch (error) {
    return res.json(error)
  }
}

export const getMessageByRoom = async (req: Request, res: Response) => {
  try {
    const messages = await getMessagesByChatService(req.params.chatId)
    res.status(200).json(messages)
  } catch (error) {
    return res.json(error)
  }
}
