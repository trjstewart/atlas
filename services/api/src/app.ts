import express, { Request, Response } from 'express'
import cico from '@lib/cico_calculators'

const BMR = cico.BMR(151, 180, 28)
const PAL = 1.4
const TDEE = cico.TDEE(BMR, PAL)

console.log(BMR, TDEE, ((TDEE * 7) - 7000) / 7)

const app: express.Application = express()

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

export default app
