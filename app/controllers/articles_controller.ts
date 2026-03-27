import { type HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'
import { CreateArticleValidator } from '#validators/article'

export default class ArticlesController {
  async index({ request }: HttpContext) {
    return Article.query().paginate(request.input('page', 1))
  }
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(CreateArticleValidator)
    console.log('🚀 ~ store ~ payload: ', payload)
    const article = await Article.create(payload)
    return {
      message: 'Category created successfully',
      data: article,
    }
  }

  async show({ params }: HttpContext) {
    return Article.findOrFail(params.id)
  }
  async update({ params }: HttpContext) {
    return Article.findBy(params.id)
  }
  async destroy({ params }: HttpContext) {
    const existArticle = await Article.findOrFail(params.id)
    if (!existArticle) return new Error(`Article with id ${params.id} not found`)
    await existArticle.delete()
    return { message: 'Article deleted successfully' }
  }
}
