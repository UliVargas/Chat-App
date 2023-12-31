import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../../utils/jwt.middleware'

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      message: 'No token found'
    })
  }

  try {
    verifyToken(token)
    next()
  } catch (error) {
    return res.status(403).json({
      error
    })
  }
}
