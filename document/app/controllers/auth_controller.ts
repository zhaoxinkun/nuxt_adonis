import { type HttpContext } from '@adonisjs/core/http'
import BasesController from '#controllers/bases_controller'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

export default class AuthController extends BasesController {
  // 登陆接口
  async login({ request, auth }: HttpContext) {
    // 验证请求体
    const { username, password } = await request.validateUsing(loginValidator)

    // 1. 复杂版的token认证流程
    // const user = await User.findBy('username', username)
    // if (!user) return this.error(ctx, 404, '用户不存在')
    // else if (!(await hash.verify(user.password, password))) return this.error(ctx, 401, '密码错误')
    // // 生成token
    // const token = await User.accessTokens.create(user)
    // return {
    //   token,
    //   status: 200,
    //   body: JSON.stringify({ username, password }),
    // }

    // 2. 上边写这么多,累不累?累,就简化一下
    try {
      const user = await User.verifyCredentials(username, password)
      // 创建token 方式一 :使用模型创建token
      // const token = await User.accessTokens.create(user)
      // 创建token 方式二 :使用auth创建token
      const token = await auth.use('api').createToken(user)
      return {
        status: 'ok',
        data: {
          user,
          token,
        },
      }
    } catch (error) {
      return this.error(422, '账号或密码错误')
    }
  }

  // 注册接口
  async register(ctx: HttpContext) {
    // 验证请求体
    await ctx.request.validateUsing(registerValidator)
    const { username, password } = await ctx.request.validateUsing(registerValidator)

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
