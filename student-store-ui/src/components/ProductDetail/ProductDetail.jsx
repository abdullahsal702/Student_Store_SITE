import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import "../ProductView/ProductView.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetail({ setError, isFetching, setIsFetching }) {

    let {productId} = useParams()

    const [product, setProduct] = useState({
        "id": -1,
        "name": "",
        "category": "",
        "image": "",
        "source": "",
        "description": "",
        "price": 0
    })

    async function getSelectedProduct() {
        setError("")
        setIsFetching(true)
        try {
          let response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
          setProduct(response.data.product)
          console.log(product)
        } catch (error) {
          console.error(error)
          setError("There was an error")
        }
        setIsFetching(false)
      }

    useEffect(() => {
        getSelectedProduct()
    }, [])



    return (
        <div className="product-detail">
            <ProductView product={product} productId={productId}/>
        </div>
    )
}