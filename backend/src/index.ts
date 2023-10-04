import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

const app = express()
app.get('/api/products', (req, res) => {
  res.json(sampleProducts)
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server start on ${PORT}`)
})
