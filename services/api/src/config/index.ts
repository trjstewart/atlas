// Ensures all required configuration is present to run the Application - assumes all Environment Variables are already loaded into the process.
import * as yup from 'yup'
import type { TypeOf } from 'yup'

const configSchema = yup.object().noUnknown().shape({
  port: yup.number().defined().default(3000),
  logLevel: yup.string().defined().oneOf(['silent', 'fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silly']).default('silly'),
})

interface Config extends TypeOf<typeof configSchema> {}

const config: Config = configSchema.validateSync({
  port: process.env['PORT'],
  logLevel: process.env['LOG_LEVEL'],
})

export default config
