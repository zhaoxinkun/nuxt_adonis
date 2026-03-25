import vine from '@vinejs/vine'

const baseValidator = {
  username: vine.string().minLength(3).maxLength(20),
  password: vine.string().minLength(3).maxLength(20),
}

export const loginValidator = vine.create({
  ...baseValidator,
  username: vine
    .string()
    .trim()
    .minLength(3)
    .maxLength(20)
    //做用户查询的处理
    .exists(async (db, value) => {
      const user = await db.from('users').where('username', value).first()
      if (!user) throw new Error('Username not found')
      return true
    }),
})

export const registerValidator = vine.create({
  ...baseValidator,
  username: vine
    .string()
    .trim()
    .minLength(3)
    .maxLength(20)
    //用户名不能重复的处理
    .unique({ table: 'users', column: 'username' }),
})
