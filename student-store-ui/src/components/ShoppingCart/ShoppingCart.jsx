import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, shoppingCart, product}){
    return (
            <div className="open">
              <h3 className="">Shopping Cart <span className="button"><i className="material-icons md-48">add_shopping_cart</i></span></h3>
              {shoppingCart.length>0 ? 
              <div className="CartTable">
                <div className="header">
                    <div className="header-row">
                        <span className="flex-2">Name</span>
                        <span className="center">Quantity</span>
                        <span className="center">Unit Price</span>
                        <span className="center">Cost</span>
                    </div>
                </div>
                {shoppingCart.map((item) => {
                    let name = product.find(element => element.id === item.itemId).name
                    let quantity = item.quantity
                    let price = product.find(element => element.id === item.itemId).price.toFixed(2)
                    let cost = (quantity*price).toFixed(2)
                    return (<div className="product-row">
                                <span className="flex-2 cart-product-name">{name}</span>
                                <span className="center cart-product-quantity">{quantity}</span>
                                <span className="center cart-product-price">{"$"+price}</span>
                                <span className="center cart-product-subtotal">{cost}</span>
                            </div>)
                })}
              </div>
              : 
              <div className="notification">No items added to cart yet. Start shopping now!</div>}
            </div>
    )
}