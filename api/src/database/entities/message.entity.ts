import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Chat } from './chat.entity'
import { User } from './user.entity'

@Entity({
  name: 'Messages'
})
export class Message {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({
    nullable: false
  })
    text: string

  @CreateDateColumn()
    createdAt: string

  @ManyToOne(() => User, user => user.messages)
    user: User

  @ManyToOne(() => Chat, (chat) => chat.messages)
    chat: Chat
}
