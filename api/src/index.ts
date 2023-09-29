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
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

app.use(cors({
  origin: '*',
  credentials: true
}))

let onlineUsers = []

io.on('connection', (socket) => {
  console.log('new connection', socket.id)

  socket.on('addNewUser', (userId: string) => {
    !onlineUsers.some(user => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id
      })
    io.emit('getOnlineUsers', onlineUsers)
  })

  socket.on('disconnect', () => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id)
    io.emit('getOnlineUsers', onlineUsers)
  })

  socket.on('sendMessage', (message) => {
    const user = onlineUsers.find(user => user.userId === message?.recipientId)
    if (user) {
      io.to(user.socketId).emit('getMessage', message)
    }
  })
})

app.use(morgan('dev'))
app.use(json())

app.use('/api', RootRouter)
server.listen(env.PORT, () => console.log(`Application running on the port ${env.PORT}`))
