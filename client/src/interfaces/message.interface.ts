import { Chat } from './chat.interface';

export interface Message {
  id:        string;
  text:      string;
  createdAt: string;
  chat:      Chat;
}
