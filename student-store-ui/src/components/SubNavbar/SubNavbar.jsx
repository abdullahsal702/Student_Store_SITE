import * as React from "react"
import axios from "axios"

export default function SubNavbar({ product, setProduct, selectedCategory, setSelectedCategory, searchValue, setSearchValue  }) {

  const handleOnTextChange = (event) => {
    setSearchValue(event.target.value)
    // console.log(searchValue)
  }

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.id)
    }

    return (
      <div className="sub-navbar">
        <div className="content">
  
          <div className="row">
            <div className="search-bar">
              <input type="text" name="search" placeholder="Search" onChange={handleOnTextChange}/>
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