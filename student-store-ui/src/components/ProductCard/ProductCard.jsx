import * as React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ product, productId, showDescription, quantity, handleAddItemToCart, handleRemoveItemFromCart }) {
    return (
      <div className="product-card">
        <div className="media">
          <Link to={"/products/"+productId}> 
            <img src={product.image} alt="product cover" loading="lazy"/>
          </Link>
        </div>
        <div className="product-info">
          <div className="main-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
          <div className="actions">
            <div className="buttons">
              <button className="add" onClick={() => {handleAddItemToCart(productId)}}><i className="material-icons">add</i></button>
              <button className="remove" onClick={() => {handleRemoveItemFromCart(productId)}}><i className="material-icons">remove</i></button>
            </div>
            {quantity > 0 ? <div className="product-quantity"><span className="amt">{quantity}</span></div> : null}
          </div>
        <div className="description">
          <p className="product-description">{showDescription ? product.description : null}</p>
        </div>
        </div>
      </div>
    )
  }
  