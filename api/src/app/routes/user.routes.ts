import { Router } from 'express'
import { findUserById, getAllUsers, register } from '../controllers/user.controller'
import { createUserValidation } from '../../common/middlewares/validations'
import { Auth } from '../../common/middlewares/auth.middleware'

const router = Router()
router.post('/register', createUserValidation, register)
router.get('/', Auth, getAllUsers)
router.get('/:userId', Auth, findUserById)

export default router
