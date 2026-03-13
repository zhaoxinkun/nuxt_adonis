import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { validators, validatorsFields } from '#validators/zh/lang'

// 通用的验证器数据
const baseCategoryValidator = {
  title: vine.string().trim().minLength(3).maxLength(10),
  parentId: vine.number().nullable(),
}

/**
 * Validator to validate the payload when creating
 * a new category.
 * 创建category的验证器
 */
export const createCategoryValidator = vine.compile(
  vine.object({
    ...baseCategoryValidator,
    // 使用vine验证方法
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
export const updateCategoryValidator = vine.compile(
  vine.object({
    ...baseCategoryValidator,
    title: baseCategoryValidator.title.unique({
      table: 'categories',
      column: 'title',
    }),
  })
)

export const createCategoryValidatorMessages = new SimpleMessagesProvider(
  {
    ...validators,
    minLength: '字段 {{ field }} 长度不能小于 {{ min }} 个字符',
    maxLength: '字段 {{ field }} 长度不能大于 {{ max }} 个字符',
  },
  {
    ...validatorsFields,
    title: '标题',
  }
)
