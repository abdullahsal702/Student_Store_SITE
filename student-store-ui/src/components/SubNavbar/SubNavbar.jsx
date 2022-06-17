import * as React from "react"
import axios from "axios"

export default function SubNavbar({ product, setProduct, category, setCategory }) {

  const handleOnTextChange = (event) => {
    setCategory(event.target.value)
    getFullProduct()
    let selectedProduct = fullProduct.filter((item) => {
      return (category == "all" ? true : item.category === category)
    })
    setProduct(selectedProduct)
  }

  const [fullProduct, setFullProduct] = React.useState([])

  async function getFullProduct() {
    try {
      let response = await axios.get("https://codepath-store-api.herokuapp.com/store")
      setFullProduct(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

    const handleCategoryChange = (event) => {
      getFullProduct()
      setCategory(event.target.id)
      let selectedProduct = fullProduct.filter((item) => {
        return (event.target.id == "all" ? true : item.category == category)
      })
      setProduct(selectedProduct)
      console.log(event)
    }

    return (
      <div className="sub-navbar">
        <div className="content">
  
          <div className="row">
            <div className="search-bar">
              <input type="text" name="search" placeholder="Search" value={category} onChange={handleOnTextChange}/>
              <i className="material-icons">search</i>
            </div>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>Help
              </span>
              <div className="cart">
                <a href="#">My Cart<i className="material-icons">shopping_cart</i></a>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="hamburger-menu">
              <i className="material-icons">menu</i>
            </div>
            {/* add "is-active functionality" */}
            <ul className="category-menu open">
              <li className="is-active">
                <button id="all" onClick={handleCategoryChange}>All Categories</button>
              </li>
              <li className="">
                <button id="clothing" onClick={handleCategoryChange}>Clothing</button>
              </li>
              <li className="">
                <button id="food" onClick={handleCategoryChange}>Food</button>
              </li>
              <li className="">
                <button id="accessories" onClick={handleCategoryChange}>Accessories</button>
              </li>
              <li className="">
                <button id="tech" onClick={handleCategoryChange}>Tech</button>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
    )
  }