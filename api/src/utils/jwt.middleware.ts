import * as JWT from 'jsonwebtoken'
import { env } from '../common/config/env'

export const verifyToken = (token: string) => {
  return JWT.verify(token, env.JWT_SECRET)
}

export const createToken = (payload: { userId: string }) => {
  return JWT.sign(payload, env.JWT_SECRET)
}
