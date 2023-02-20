import config from './config'
import app from './app'
import knex from 'knex'

const message: string = 'this is a message...'

console.log(message, config)

app.listen(config.port, () => {
  console.log(`Server is listening on Port ${config.port}`)
})

const knexInstance = knex({
  client: 'pg',
  // connection: 'postgres://postgres:password@localhost:5432/atlas'
  connection: {
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
  },
  pool: {
    min: config.database.pool.min,
    max: config.database.pool.max,
  },
  migrations: {
    tableName: config.database.migrations.tableName,
    directory: config.database.migrations.directory,
  },
})

// knexInstance.schema.createTable('user', (table: any) => {
//   table.increments('id')
//   table.string('name')
//   table.integer('age')
// })
// .then(() => {
//   console.log('Table created')
// })

knexInstance.migrate.latest()
// knexInstance.migrate.down()
// knexInstance.seed.run()





