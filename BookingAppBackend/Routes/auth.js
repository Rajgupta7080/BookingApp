import express, { Router } from 'express'
const route = express.Router()
route.get('/', (req, res) => {
  res.send('Hii i am auth endpoint')
})
route.get('/register', (req, res) => {
  res.send('Hii i am auth register point')
})
export default route
