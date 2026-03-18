import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

// 抽象的工具控制器
@inject() //依赖注入
export default abstract class BasesController {
  // constructor(protected ctx: HttpContext) {}

  error(ctx: HttpContext, status: number, message: string): unknown
  error(status: number, message: string): { status: number; message: string }

  error(arg1: HttpContext | number, arg2: number | string, arg3?: string) {
    if (typeof arg1 === 'number') {
      return {
        status: arg1,
        message: `Expecting ${arg1} to be ${arg2}`,
      }
    }
    return arg1.response.status(arg2 as number).json({
      status: arg2,
      message: `Expecting ${arg2} to be ${arg3}`,
    })
  }
  // error(ctx: HttpContext, error?: unknown) {
  //   const err = error as {
  //     status: number
  //     statusCode: number
  //     message: string
  //   }
  //   const status = err.statusCode || err.status || 500
  //   const msg = err.message || 'Something went wrong'
  //   ctx.response.status(status).json({ status, message: msg })
  // }
}
