import express, { json } from 'express'

import { AppDataSource } from './database/ormconfig'
import morgan from 'morgan'
import RootRouter from './app/routes/index.routes'
import { env } from './common/config/env'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

AppDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
const server = http.createServer(app)
const io = new Server(server)
app.use(cors())

app.use(morgan('dev'))
app.use(json())

app.use('/api', RootRouter)

server.listen(env.PORT, () => console.log(`Application running on the port ${env.PORT}`))
