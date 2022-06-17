import * as React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ item }) {
    return (
      <div className="product-card">
        <div className="media">
          <Link to={item.id}>
            <img src={item.image} alt="product cover" loading="lazy"/>
          </Link>
        </div>
        <div className="product-info">
          <div className="main-info">
            <p className="product-name">{item.name}</p>
            <p className="product-price">${item.price}</p>
          </div>
        </div>
      </div>
    )
  }
  