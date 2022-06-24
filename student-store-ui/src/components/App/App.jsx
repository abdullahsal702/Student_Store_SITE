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
  //for api calls
  const [error, setError] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  //used in subNavbar
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchValue, setSearchValue] = useState("")
  //sidebar 
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  //checkout 
  const [checkoutForm, setCheckoutForm] = useState({
    name: "", 
    email: ""
  })
  const [receipt, setReceipt] = useState([])

  const handleOnToggle = () => {
    setIsOpen(!isOpen)
  }

  function handleAddItemToCart(productId) { 
    let tempCart = [...shoppingCart]
    let isFound = false 
    if (tempCart.length == 0){
      tempCart.push({itemId : productId, quantity : 1}) 
      setShoppingCart(tempCart)
      return
    }
    for (let i = 0; i < tempCart.length; i++){
      if (tempCart[i].itemId === productId){
        tempCart[i].quantity += 1  
        isFound = true
        break
      }
    }
    if (isFound == false){
      tempCart.push({itemId : productId, quantity : 1}) 
    }
    setShoppingCart(tempCart)
  }

  function handleRemoveItemFromCart(productId){
    let tempCart = [...shoppingCart]
    for (let i = 0; i < tempCart.length; i++){
      if (tempCart[i].itemId === productId){
        tempCart[i].quantity -= 1  
        tempCart[i].quantity < 0 ? tempCart[i].quantity = 0 : null
        break
      }
    }
    tempCart = tempCart.filter((element) => {
      return (element.quantity > 0)
    })
    setShoppingCart(tempCart)
  }

  function handleOnCheckoutFormChange(name, value){
    setCheckoutForm({
      ...checkoutForm, [name]: value
    })
  }

  const handleOnSubmitCheckoutForm = async (evt) => {
    evt.preventDefault() 
    try {
      const response = await axios.post("http://localhost:3001/store", {user: checkoutForm, shoppingCart: shoppingCart}) 
      setReceipt(response.data.purchase.receipt)
      console.log(receipt)
    } catch(err) {
      console.log(err)
    }
  }

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
    setError("")
    setIsFetching(true)
    try {
      let response = await axios.get("http://localhost:3001/store")
      setProduct(response.data.products)
      console.log(product) 
    } catch (error) {
      console.error(error)
      setError("There was an error")
    }
    setIsFetching(false)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} product={product} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} receipt={receipt}/>
          <Routes>
            <Route path="/" 
              element={<Home 
                product={product} 
                currentProducts={currentProducts}
                setProduct={setProduct} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}/>}>
            </Route>
            <Route path="/products/:productId" 
              element={<ProductDetail setError={setError} isFetching={isFetching} setIsFetching={setIsFetching}/>}>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
