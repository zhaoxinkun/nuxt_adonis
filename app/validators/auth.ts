import vine from '@vinejs/vine'

const baseValidator = {
  username: vine.string().minLength(3).maxLength(20),
  password: vine.string().minLength(3).maxLength(20),
}

export const loginValidator = vine.create({
  ...baseValidator,
})

export const registerValidator = vine.create({
  ...baseValidator,
})
