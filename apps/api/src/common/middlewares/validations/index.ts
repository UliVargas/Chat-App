import { createChatschema, createMessageSchema, createUserSchema, loginSchema } from './schemas'
import { validateSchema } from './validateSchema'

// Users Validation
export const createUserValidation = validateSchema(createUserSchema)
export const loginValidation = validateSchema(loginSchema)

// Chats Validation
export const createChatValidation = validateSchema(createChatschema)

// Messages Validation
export const createMessageValidation = validateSchema(createMessageSchema)