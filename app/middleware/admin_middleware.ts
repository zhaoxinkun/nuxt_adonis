import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { Role } from '#enums/roles'
import { Exception } from '@adonisjs/core/exceptions'

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    //这个就是用户的所有数据了
    // const user = ctx.auth.user
    const user = await ctx.auth.authenticate()
    console.log('🚀 ~ handle ~ user: ', user)
    if (user.role !== Role.Admin) {
      throw new Exception('You are not an admin', {
        status: 403,
        code: 'E_NOT_ADMIN',
      })
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
