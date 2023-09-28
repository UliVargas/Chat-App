import { DataSource } from 'typeorm'
import { env } from '../common/config/env'
import { Chat, Message, User } from './entities'
// import "reflect-metadata"

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: +env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  synchronize: true,
  entities: [User, Chat, Message]
})