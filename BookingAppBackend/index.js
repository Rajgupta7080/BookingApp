import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authroute from './Routes/auth.js'
import hotelroute from './Routes/hotels.js'
import userroute from './Routes/users.js'
import roomsroute from './Routes/rooms.js'
mongoose.set('strictQuery', false)
dotenv.config()
const app = express()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connect with mongodb')
  } catch (error) {
    throw error
  }
}
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Disconnected')
})
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected')
})

// R...A...J..........G...U...P...T...A
// R...A...J..........G...U...P...T...A
// middleware
app.use(express.json())

app.use('api/auth', authroute)
app.use('/api/hotels', hotelroute)
app.use('api/user', userroute)
app.use('/api/rooms', roomsroute)
app.get('/', (req, res) => {
  res.send('I am Homepage')
})

app.listen(8000, () => {
  connect()
  console.log('Backend of booking app started')
})
