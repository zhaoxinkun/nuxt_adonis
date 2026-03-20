import { BaseSchema } from '@adonisjs/lucid/schema'
import { Role } from '#enums/roles'

export default class extends BaseSchema {
  protected tableName = 'users' //用户表

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.enum('role', Object.values(Role)).defaultTo(Role.User)
      table.string('username', 254).notNullable().unique()
      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
