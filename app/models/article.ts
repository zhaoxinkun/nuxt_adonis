import { ArticleSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Article extends ArticleSchema {
  @column()
  declare categoryId: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
