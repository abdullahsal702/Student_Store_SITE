import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import "../ProductView/ProductView.css"

export default function ProductDetail() {
    return (
        <div className="product-detail">
            <ProductView/>
        </div>
    )
}