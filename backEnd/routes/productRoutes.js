import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

//获取所有 产品请求 get
router.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))
router.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'notfound' })
    }
}))

export default router