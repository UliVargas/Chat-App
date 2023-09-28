import { Request, Response } from 'express'
import { createUserService, loginService } from '../services/auth.service'

export const login = async (req: Request, res: Response) => {
  const user = await loginService(req.body)
  res.status(200).json(user)
}
