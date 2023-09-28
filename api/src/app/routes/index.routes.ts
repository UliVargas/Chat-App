import { Router } from 'express'
import AuthRouter from './auth.routes'
import UserRouter from './user.routes'
import ChatRouter from './chat.routes'
import MessageRouter from './message.routes'

const router = Router()

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)
router.use('/chats', ChatRouter)
router.use('/messages', MessageRouter)

export default router
