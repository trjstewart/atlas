// Ensures all required configuration is present to run the Application - assumes all Environment Variables are already loaded into the process.
import * as yup from 'yup'
import type { TypeOf } from 'yup'

const configSchema = yup.object().noUnknown().shape({
  port: yup.number().defined().default(3000),
  logLevel: yup.string().defined().oneOf(['silent', 'fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silly']).default('silly'),
  database: yup.object().defined().shape({
    name: yup.string().defined().default('atlas'),
    host: yup.string().defined().default('localhost'),
    port: yup.number().defined().default(5432),
    user: yup.string().defined().default('postgres'),
    password: yup.string().defined().default('password'),
    pool: yup.object().defined().shape({
      min: yup.number().defined().default(1),
      max: yup.number().defined().default(10),
    }),
    migrations: yup.object().defined().shape({
      tableName: yup.string().defined().default('knex_migrations'),
      directory: yup.string().defined().default(`${__dirname}/../database/migrations`),
    }),
  }),
})

interface Config extends TypeOf<typeof configSchema> {}

const config: Config = configSchema.validateSync({
  port: process.env['PORT'],
  logLevel: process.env['LOG_LEVEL'],
  database: {
    name: process.env['DATABASE_NAME'],
    host: process.env['DATABASE_HOST'],
    port: process.env['DATABASE_PORT'],
    user: process.env['DATABASE_USER'],
    password: process.env['DATABASE_PASSWORD'],
    pool: {
      min: process.env['DATABASE_POOL_MIN'],
      max: process.env['DATABASE_POOL_MAX'],
    },
    migrations: {
      tableName: process.env['DATABASE_MIGRATIONS_TABLE_NAME'],
      directory: process.env['DATABASE_MIGRATIONS_DIRECTORY'],
    },
  },
})

export default config
