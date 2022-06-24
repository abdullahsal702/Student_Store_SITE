const express = require("express")
const Store = require("../models/store")
const router = express.Router() 

router.get("/", async (req, res, next) => {
    try {
        const products = Store.getProducts()
        res.status(200).json({products})
    } catch (err) {
        next(err)
    }
})

router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = Store.getProductById(productId)
        //add notfound error
        res.status(200).send({product: product})
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const user = req.body.user
        const shoppingCart = req.body.shoppingCart
        const purchase = Store.purchaseOrder(user, shoppingCart)
        res.status(200).json({purchase: purchase})
    } catch (err) {
        next(err)
    }
})


module.exports = router 