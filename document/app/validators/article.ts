import vine from '@vinejs/vine'

export const CreateArticleValidator = vine.create(
  vine.object({
    title: vine.string().minLength(1).maxLength(255).unique({
      table: 'articles',
      column: 'title',
    }),
    content: vine.string().minLength(1),
    category_id: vine.number().exists(async (db, value, _field) => {
      return !!(await db.from('categories').where('id', value).first())
    }),
  })
)

export const UpdateArticleValidator = vine.object({})
