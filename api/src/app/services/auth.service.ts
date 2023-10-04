import { hash, compare } from 'bcrypt'
import { env } from '../../common/config/env'
import { SALTS } from '../../common/constants'
import { AppDataSource } from '../../database/ormconfig'
import { User } from '../../database/entities/user.entity'
import { createToken } from '../../utils/jwt.middleware'

const UserRepository = AppDataSource.manager.getRepository(User)

const createUserService = async (payload: any) => {
  const hashed = await hash(env.JWT_SECRET, SALTS)
  const user = UserRepository.create({
    ...payload,
    password: hashed
  })
  return await UserRepository.save(user)
}

const loginService = async (payload: any) => {
  const user = await UserRepository.findOneBy({ email: payload.email })

  const verified = compare(payload.password, user.password)

  if (!verified) throw new Error('Credentials incorrects')

  const token = createToken({ userId: user.id })

  return {
    ...user,
    token
  }
}

export {
  loginService,
  createUserService
}
