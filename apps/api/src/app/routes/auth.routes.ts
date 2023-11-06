import { Router } from 'express'
import { login } from '../controllers/auth.controller'
import { loginValidation } from '../../common/middlewares/validations'

const router = Router()
router.post('/login', loginValidation, login)

export default router
