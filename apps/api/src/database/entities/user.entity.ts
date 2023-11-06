import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Chat } from './chat.entity'
import { Message } from './message.entity'

@Entity({
  name: 'Users'
})
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    name: string

  @Column()
    last_name: string

  @Column({
    unique: true
  })
    email: string

  @Column()
    password: string

  @CreateDateColumn()
    createdAt: string

  @OneToMany(() => Message, (message) => message.user)
    messages: Message[]

  @ManyToMany(() => Chat, chat => chat.users)
  @JoinTable()
    chats: Chat[]
}
