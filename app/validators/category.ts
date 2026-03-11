import vine, {SimpleMessagesProvider} from '@vinejs/vine'
import {validators, validatorsFields} from "#validators/zh/lang";

/**
 * Validator to validate the payload when creating
 * a new category.
 */
export const createCategoryValidator = vine.compile(
    vine.object({
        // 使用vine验证方法
        title: vine.string().trim().minLength(3).maxLength(10)
    })
)

export const createCategoryValidatorMessages = new SimpleMessagesProvider({
    ...validators,
    "minLength": "字段 {{ field }} 长度不能小于 {{ min }} 个字符",
    "maxLength": "字段 {{ field }} 长度不能大于 {{ max }} 个字符",

}, {
    ...validatorsFields,
    "title": "标题",
})

/**
 * Validator to validate the payload when updating
 * an existing category.
 */
export const updateCategoryValidator = vine.compile(
    vine.object({})
)
