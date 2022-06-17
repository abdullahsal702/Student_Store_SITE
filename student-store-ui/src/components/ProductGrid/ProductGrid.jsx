import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "../ProductCard/ProductCard.css"

export default function ProductGrid({ products }) {

    return (
      <div className="container">
        <div id="Buy" className="product-grid">
          <div className="content">
            <h3>Best Selling Products</h3>
            <div className="grid">
              {products.map((item) => {
                return <ProductCard product={item} key={item.id} productId={item.id} showDescription={false}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  