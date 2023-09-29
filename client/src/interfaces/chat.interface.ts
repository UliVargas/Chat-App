import { User } from './user.interface';

export interface Chat {
  id: string;
  users: User[]
  createdAt: string;
}
