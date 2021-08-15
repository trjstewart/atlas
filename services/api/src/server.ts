import config from './config'
import app from './app'

const message: string = 'this is a message...'

console.log(message, config)

app.listen(config.port, () => {
  console.log(`Server is listening on Port ${config.port}`)
})
