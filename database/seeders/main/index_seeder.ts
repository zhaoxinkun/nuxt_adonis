import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in a environment specified in Seeder
     */
    // if (
    //   !Seeder.default.environment ||
    //   (!Seeder.default.environment.includes('development') && app.inDev) ||
    //   (!Seeder.default.environment.includes('testing') && app.inTest) ||
    //   (!Seeder.default.environment.includes('production') && app.inProduction)
    // ) {
    //   return
    // }

    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/1_category_seeder'))
    await this.seed(await import('#database/seeders/2_article_seeder'))
    await this.seed(await import('#database/seeders/user_seeder'))
  }
}
