import type {HttpContext} from '@adonisjs/core/http'
import Category from "#models/category";

export default class CategoriesController {

    async index({}: HttpContext) {
        //使用模型读取数据
        return await Category.all()
    }


    async create({}: HttpContext) {
    }

    async store({request}: HttpContext) {
        return await Category.create(request.body())
    }


    async show({params}: HttpContext) {
    }


    async edit({params}: HttpContext) {
    }


    async update({params, request}: HttpContext) {
    }

    async destroy({params}: HttpContext) {
    }
}
