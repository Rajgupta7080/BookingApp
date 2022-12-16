import express from 'express'
const router = express.Router()
router.get('/', (req, res) => {
  res.send('Hii i am users router')
})
export default router
