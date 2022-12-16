import express from 'express'
const router = express.Router()
import HotelModel from '../Models/HotelModel.js'
// crud operations
// create
router.post('/', async (req, res) => {
  const newHotel = new HotelModel(req.body)
  try {
    const savedhotel = await newHotel.save()
    res.status(200).json(savedhotel)
  } catch (error) {
    res.status(500).json(error)
  }
})
// update
// delete
// put
// patch

export default router
