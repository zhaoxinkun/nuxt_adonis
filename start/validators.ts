import vine, {SimpleMessagesProvider} from '@vinejs/vine'
import {validators, validatorsFields} from "#validators/zh/lang";

// 一般写法
// vine.messagesProvider = new SimpleMessagesProvider({
//   // Applicable for all fields
//   'required': 'The {{ field }} field is required',
//   'string': 'The value of {{ field }} field must be a string',
//   'email': 'The value is not a valid email address',
//
//   // Error message for the username field
//   'username.required': 'Please choose a username for your account',
// })

// 通用写法
vine.messagesProvider = new SimpleMessagesProvider(validators, validatorsFields)
