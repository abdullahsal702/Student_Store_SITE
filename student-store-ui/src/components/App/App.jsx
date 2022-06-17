import * as React from "react"
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  const [product, setProduct] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [category, setCategory] = useState("")

  // issue when I refresh the page setProduct
  async function getResults() {
    setIsFetching(true)
    try {
      let response = await axios.get("https://codepath-store-api.herokuapp.com/store")
      setProduct(response.data.products)
    } catch (error) {
      console.error(error)
      setIsFetching(false)
    }
    // axios.get("https://codepath-store-api.herokuapp.com/store")
    //   .then(function (response) {
    //     return response 
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    //   .then(function (response) {
    //     setProduct(response.data.products)
    //   }) 
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
            <Route path="/" element={<Home product={product} setProduct={setProduct} category={category} setCategory={setCategory}/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
