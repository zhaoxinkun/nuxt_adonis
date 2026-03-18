import { type HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  // 登陆接口
  async login({ request }: HttpContext) {
    const { username, password } = request.only(['username', 'password'])
    return {
      status: 200,
      body: JSON.stringify({ username, password }),
    }
  }

  // 注册接口
  async register({ request }: HttpContext) {
    const { username, password } = request.only(['username', 'password'])
    return {
      status: 200,
      body: JSON.stringify({ username, password }),
    }
  }
}
