import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import {
  createCategoryValidator,
  createCategoryValidatorMessages,
  updateCategoryValidator,
} from '#validators/category'

export default class CategoriesController {
  // 获取数据
  async index({}: HttpContext) {
    //使用模型读取数据
    return await Category.all()
  }

  // 创建数据
  // async create({}: HttpContext) {
  // }

  //添加数据
  async store({ request }: HttpContext) {
    // 1. 验证器的分开写法
    // const data = request.all()
    // const payload =await createCategoryValidator.validate(data)

    // 2. 验证器的直接写法
    const payload = await request.validateUsing(createCategoryValidator, {
      // 验证器中文配置
      // messagesProvider: new SimpleMessagesProvider({
      //         'title.required': '标题是必填项',
      //         'title.minLength': '标题长度不能小于3个字符',
      //         'title.maxLength': '标题长度不能大于10个字符',
      //     },
      // )

      // 提取出来的方式使用
      messagesProvider: createCategoryValidatorMessages,
    })
    return await Category.create(payload)
  }

  // 查找数据
  async show({ params }: HttpContext) {
    return await Category.findOrFail(params.id)
  }

  // async edit({params}: HttpContext) {
  // }

  // 更新数据
  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(updateCategoryValidator, {
      messagesProvider: createCategoryValidatorMessages,
    })
    return await Category.findOrFail(params.id).then(async (category) => {
      category.merge(payload)
      return await category.save()
    })
  }

  async destroy({ params }: HttpContext) {
    return await Category.findOrFail(params.id).then(async (category) => {
      return await category.delete()
    })
  }
}
