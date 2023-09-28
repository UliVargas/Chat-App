import { Router } from 'express'
import { findUserById, getAllUsers, register } from '../controllers/user.controller'
import { createUserValidation } from '../../common/middlewares/validations'

const router = Router()
router.post('/register', createUserValidation, register)
router.get('/', getAllUsers)
router.get('/:userId', findUserById)

export default router
