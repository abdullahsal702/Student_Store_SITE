import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "../ProductCard/ProductCard.css"

export default function ProductGrid({ product }) {
    return (
      <div className="container">
        <div id="Buy" className="product-grid">
          <div className="content">
            <h3>Best Selling Products</h3>
            <div className="grid">
              {product.map((item) => {
                return <ProductCard item={item} key={item.id}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  