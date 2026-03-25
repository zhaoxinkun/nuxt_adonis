import factory from '@adonisjs/lucid/factories'
import Category from '#models/category'
import type { LucidModel } from '@adonisjs/lucid/types/model'

// 栏目数据工厂
export const CategoryFactory = factory
  .define(<LucidModel>Category, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
    }
  })
  .build()
