import { Router } from 'express'
import { createMessage, getMessageByRoom } from '../controllers/message.controller'

const router = Router()
router.post('/', createMessage)
router.get('/:chatId', getMessageByRoom)

export default router
