import vine from '@vinejs/vine'
import { validatorMessagesProvider } from '#validators/zh/form_validator'

// 通用的验证器数据
const baseCategoryValidator = {
  title: vine.string().trim().minLength(3).maxLength(10),
  parentId: vine.number().optional(), //可选参数
}

/**
 * Validator to validate the payload when creating
 * a new category.
 * 创建category的验证器
 */
export const createCategoryValidator = vine.create(
  vine.object({
    ...baseCategoryValidator,
    // 使用vine验证方法,保持数据的唯一性
    title: baseCategoryValidator.title.unique({
      table: 'categories',
      column: 'title',
    }),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing category.
 * 更新category的验证器
 */
export const updateCategoryValidator = vine.create(
  vine.object({
    ...baseCategoryValidator,
    // 使用vine验证方法,保持数据的唯一性,更新的时候排出自己不能重复问题
    title: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(10)
      .unique(async (db, value, field) => {
        const category = await db
          .from('categories')
          .where('title', value)
          .whereNot('id', field.data.params.id)
          .first()

        return !category
      }),
  })
)
// export const createCategoryValidatorMessages = new SimpleMessagesProvider(
//   {
//     ...validatorsMessages, //全局的
//     minLength: '字段 {{ field }} 长度不能小于 {{ min }} 个字符',
//     maxLength: '字段 {{ field }} 长度不能大于 {{ max }} 个字符',
//   },
//   {
//     // 全局的
//     ...validatorsFields,
//     title: '标题',
//   }
// )

export const createCategoryValidatorMessages = validatorMessagesProvider(
  {},
  {
    title: '标题',
  }
)
