import { Router } from 'express'
import { createChatValidation } from '../../common/middlewares/validations'
import { createChat, getAllChatsByUser, getAllChatsByUsers } from '../controllers/chat.controller'
import { Auth } from '../../common/middlewares/auth.middleware'

const router = Router()

router.post('/', Auth, createChatValidation, createChat)
router.get('/:userId', Auth, getAllChatsByUser)
router.get('/:firstUserId/:secondUserId', Auth, getAllChatsByUsers)

export default router
