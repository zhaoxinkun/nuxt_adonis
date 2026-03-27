import emitter from '@adonisjs/core/services/emitter'
import chalk from 'chalk'

emitter.on('db:query', function (query) {
  console.log(chalk.blue(query.sql))
})
