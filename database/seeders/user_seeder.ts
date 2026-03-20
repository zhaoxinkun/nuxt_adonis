import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'
import { Role } from '#enums/roles'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const users = await UserFactory.createMany(10)
    const user = users[0]
    user.username = 'admin'
    user.role = Role.Admin
    user.password = 'admin'
    await user.save()
  }
}
