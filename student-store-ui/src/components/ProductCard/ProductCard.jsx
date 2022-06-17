import * as React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ product, productId, showDescription }) {
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
        <div className="description">
          <p className="product-description">{showDescription ? product.description : null}</p>
        </div>
        </div>
      </div>
    )
  }
  