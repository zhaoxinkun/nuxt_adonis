import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { Role } from '#enums/roles'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      username: faker.internet.username(),
      password: faker.internet.password(),
      role: Role.User,
    }
  })
  .build()
