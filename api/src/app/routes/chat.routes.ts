import { Router } from 'express'
import { createChatValidation } from '../../common/middlewares/validations'
import { createChat, getAllChatsByUsers } from '../controllers/chat.controller'

const router = Router()
router.post('/', createChatValidation, createChat)
router.get('/:firstUserId/:secondUserId', getAllChatsByUsers)

export default router
