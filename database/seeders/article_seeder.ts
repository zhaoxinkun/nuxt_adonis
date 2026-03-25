import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ArticleFactory } from '#database/factories/article_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ArticleFactory.createMany(10)
  }
}
