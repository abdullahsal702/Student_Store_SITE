import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "../ProductCard/ProductCard.css"

export default function ProductGrid({ products, handleAddItemToCart, shoppingCart, handleRemoveItemFromCart }) {

    return (
      <div className="container">
        <div id="Buy" className="product-grid">
          <div className="content">  
            <h3>Best Selling Products</h3>   
            <div className="grid">
              {products.map((item) => {
                let prod = shoppingCart.find(element => element.itemId === item.id)
                let quantity = prod ? prod.quantity : 0     
                return <ProductCard product={item} key={item.id} productId={item.id} showDescription={false} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  