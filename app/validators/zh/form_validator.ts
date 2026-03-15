import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { validatorsFields, validatorsMessages } from '#validators/zh/lang'
import { type HttpContext } from '@adonisjs/core/http'

export const validatorMessagesProvider = (messages = {}, fields = {}) =>
  new SimpleMessagesProvider(
    {
      ...validatorsMessages,
      ...messages,
    },
    {
      ...validatorsFields,
      ...fields,
    }
  )

/**
 * 自定义验证器
 * @param rules 验证规则,用来创建验证器
 * @param messages 自定义的错误信息
 * @param fields 自定义的字段名
 * @returns
 */

export const formValidator = <T extends Record<string, any>>(
  rules: T,
  messages = {},
  fields = {}
) => {
  // 创建验证器规则
  const validators = vine.create(rules)

  // 创建验证器消息提供者
  const messagesProvider = validatorMessagesProvider(messages, fields)

  //直接返回执行结果
  return async (request: HttpContext['request']) => {
    return await request.validateUsing(validators, {
      messagesProvider,
    })
  }
}
