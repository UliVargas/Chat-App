import { CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'
import { Message } from './message.entity'

@Entity({
  name: 'Chats',
})
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: string

  @ManyToMany(() => User, user => user.chats)
  @JoinTable()
  users: User[]

  @OneToMany(() => Message, message => message.chat)
  messages: Message[]
}
