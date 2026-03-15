/*
|--------------------------------------------------------------------------
| Validator file
|--------------------------------------------------------------------------
|
| The validator file is used for configuring global transforms for VineJS.
| The transform below converts all VineJS date outputs from JavaScript
| Date objects to Luxon DateTime instances, so that validated dates are
| ready to use with Lucid models and other parts of the app that expect
| Luxon DateTime.
|
*/

import { DateTime } from 'luxon'
import { VineDate } from '@vinejs/vine'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { validatorsMessages, validatorsFields } from '#validators/zh/lang'

declare module '@vinejs/vine/types' {
  interface VineGlobalTransforms {
    date: DateTime
  }
}

VineDate.transform((value) => DateTime.fromJSDate(value))

// 全局的验证器消息 一般写法
// vine.messagesProvider = new SimpleMessagesProvider({
//   // Applicable for all fields
//   'required': 'The {{ field }} field is required',
//   'string': 'The value of {{ field }} field must be a string',
//   'email': 'The value is not a valid email address',
//
//   // Error message for the username field
//   'username.required': 'Please choose a username for your account',
// })

// 全局的验证器消息 通用写法
vine.messagesProvider = new SimpleMessagesProvider(validatorsMessages, validatorsFields)
