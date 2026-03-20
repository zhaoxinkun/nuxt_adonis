import { type HttpContext } from '@adonisjs/core/http'
import BasesController from '#controllers/bases_controller'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthController extends BasesController {
  // 登陆接口
  async login(ctx: HttpContext) {
    const { username, password } = ctx.request.only(['username', 'password'])

    const user = await User.findBy('username', username)
    if (!user) return this.error(ctx, 404, '用户不存在')
    else if (!(await hash.verify(user.password, password))) return this.error(ctx, 401, '密码错误')
    // 生成token
    const token = await User.accessTokens.create(user)
    return {
      token,
      status: 200,
      body: JSON.stringify({ username, password }),
    }

    // 上边写这么多,累不累?累,就简化一下
    // const user = await User.verifyCredentials(username, password)
    // const token = await User.accessTokens.create(user)
    // return {
    //   status: 'ok',
    //   data: {
    //     user,
    //     token,
    //   },
    // }
  }

  // 注册接口
  async register(ctx: HttpContext) {
    const { username, password } = ctx.request.only(['username', 'password'])
    // 先验证看看数据库里有没有
    const exists = await User.findBy('username', username)
    if (exists) return this.error(ctx, 409, 'Username already exists')

    // 没有的话,创建新用户
    const user = await User.create({
      username,
      password, //模型自动加密密码,因为AuthFinder
    })
    return {
      status: 200,
      body: user,
    }
  }
}
