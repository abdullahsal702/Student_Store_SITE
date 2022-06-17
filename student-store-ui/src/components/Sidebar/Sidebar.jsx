import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {

  const handleOnToggle = (event) => {
    if (event.target.offsetParent.classList.contains("closed")) {
      event.target.offsetParent.classList.remove("closed")
      event.target.offsetParent.classList.add("open")
    } else {
      event.target.offsetParent.classList.add("closed")
      event.target.offsetParent.classList.remove("open")
    }
  }

  return (
    <section className="sidebar closed">
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span>
            <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span>
            <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span>
          </div>
        </div>
      </div>
    </section>
  )
}
