const {storage} = require("../data/storage")

class Store {
    static getProducts() {
        const products = storage.get("products").value()
        return products
    }

    static getProductById(productId) {
        const product = storage.get("products").find({id: Number(productId)}).value()
        return product 
    }

    static purchaseOrder (user, shoppingCart){
        let total = 0 
        let subTotal = 0 
        shoppingCart.map((product) => {
            let item = Store.getProductById(product.itemId)
            subTotal += (item.price * product.quantity)
            total += (item.price * product.quantity) * 1.0875
        })
        //add errors 

        const createdAt = new Date().toISOString() 

        let receipt = [] 
        //first line of receipt
        receipt[0] = "Showing receipt for " + user.name + " avialable at " + user.email + ":"
        shoppingCart.map((product) => {
            let item = Store.getProductById(product.itemId)
            let line = product.quantity + " total " + item.name + " purchased at a cost of $" + item.price.toFixed(2) + " for a total cost of $" + (item.price*product.quantity).toFixed(2)
            receipt.push(line)
        })
        //last two lines of receipt 
        let line = "Before taxes, the subtotal was $" + subTotal.toFixed(2)
        receipt.push(line)
        line = "After taxes and fees were applied, the total comes out to $" + total.toFixed(2)
        receipt.push(line)

        const purchase = {
            id : shoppingCart.length + 1, 
            name: user.name,
            email: user.email, 
            order: shoppingCart,
            total: total.toFixed(2), 
            createdAt: createdAt,
            receipt: receipt
        }

        return purchase 

    }

}

module.exports = Store