import { Request, Response } from 'express'
import { createchatService, getAllChatsByUsersService } from '../services/chat.service'

export const createChat = async (req: Request, res: Response) => {
  try {
    const chatRoom = await createchatService(req.body)
    res.status(201).json(chatRoom)
  } catch (error) {
    return res.json(error)
  }
}

export const getAllChatsByUsers = async (req: Request, res: Response) => {
  try {
    const { firstUserId, secondUserId } = req.params
    const chat = await getAllChatsByUsersService(firstUserId, secondUserId)
    res.status(200).json(chat)
  } catch (error) {
    res.status(error.status).json(error)
  }
}