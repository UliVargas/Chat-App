import { Chat } from './chat.interface'
import { User } from './user.interface'

export interface Message {
  id: string
  text: string
  createdAt: string
  chat: Chat
  user: User
}
