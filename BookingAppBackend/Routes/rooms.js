import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('i am room router')
})
export default router
