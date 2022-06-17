import * as React from "react"
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  const [product, setProduct] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  //used in subNavbar
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchValue, setSearchValue] = useState("")

  const currentProducts = product.filter((item) => {
    try {
      if (item.name.toLowerCase().match(searchValue) !== null && (selectedCategory === "all" || selectedCategory === item.category)) {
        return true
      } else {
        return false
      }
    } catch {
      return false 
    }
  })

  async function getResults() {
    setIsFetching(true)
    try {
      let response = await axios.get("https://codepath-store-api.herokuapp.com/store")
      setProduct(response.data.products)
    } catch (error) {
      console.error(error)
      setIsFetching(false)
    }
  }

  useEffect(() => {
    getResults()
    console.log(product) 
    console.log("isFetching is: ", isFetching)
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" 
              element={<Home 
                product={product} 
                currentProducts={currentProducts}
                setProduct={setProduct} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>}>
            </Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
