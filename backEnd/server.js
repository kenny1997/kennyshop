import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
dotenv.config()
connectDB()
const app = express()

app.use('/api/products', productRoutes)
app.get('/', (req, res) => {
    res.send('im kennyyyyyyyyyyyyyy')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('hello kenny'))