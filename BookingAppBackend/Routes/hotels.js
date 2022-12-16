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
// update(Put)
router.put('/:id', async (req, res) => {
  try {
    const updatedhotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      },
    )
    res.status(200).json(updatedhotel)
  } catch (error) {
    res.status(500).json(error)
  }
})
// delete
router.delete('/:id', async (req, res) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id)
    res.status(200).json('Deleted succesfully')
  } catch (error) {
    res.status(500).json(error)
  }
})
// get
router.get('/:id', async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (error) {
    res.status(500).json(error)
  }
})

// getall
router.get('/', async (req, res) => {
  try {
    const hotelAll = await HotelModel.find()
    res.status(200).json(hotelAll)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router
