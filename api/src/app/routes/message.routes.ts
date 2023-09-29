import { Router } from 'express'
import { createMessage, getMessageByChatId } from '../controllers/message.controller'
import { Auth } from '../../common/middlewares/auth.middleware'

const router = Router()
router.post('/', Auth, createMessage)
router.get('/:chatId', Auth, getMessageByChatId)

export default router
