import { Request, Response } from 'express'
import { createUserService, loginService } from '../services/auth.service'
import { findUserByIdService, getAllUsersService } from '../services/user.service'

export const register = async (req: Request, res: Response) => {
  const user = await createUserService(req.body)
  res.status(201).json(user)
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users)
  } catch (error) {
    res.json(error)
  }
}

export const findUserById = async (req: Request, res: Response) => {
  try {
    const user = await findUserByIdService(req.params.userId)
    res.status(200).json(user)
  } catch (error) {
    res.status(error.status).json({
      message: error.message
    })
  }
}
