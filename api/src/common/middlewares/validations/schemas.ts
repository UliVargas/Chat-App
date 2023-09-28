import Joi from 'joi'

const props = {
  name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(5).max(30)
}

export const createUserSchema = Joi.object({
  name: props.name.required(),
  last_name: props.last_name.required(),
  email: props.email.required(),
  password: props.password.required()
})

export const loginSchema = Joi.object({
  email: props.email.required(),
  password: props.password.required()
})

export const createChatschema = Joi.object({
  firstUserId: Joi.string().required().uuid(),
  secondUserId: Joi.string().required().uuid()
})


export const createMessageSchema = Joi.object({
  userId: Joi.string().required(),
  chatId: Joi.string().required(),
  text: Joi.string().required()
})