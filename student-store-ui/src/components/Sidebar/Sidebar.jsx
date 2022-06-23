import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "../ShoppingCart/ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "../CheckoutForm/CheckoutForm.css"

export default function Sidebar({isOpen, product, handleOnToggle, shoppingCart}) {

  return (
    <section className={"sidebar " + (isOpen ? "open" : "closed")}>
      <div className="wrapper">
        <button className={"toggle-button button  " + (isOpen ? "open" : "closed")} onClick={() => handleOnToggle()}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          {isOpen ? <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} product={product}/> 
          : 
          <div className="cart-icons">
            <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span>
            <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span>
            <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span>
          </div>} 
          {isOpen ? <CheckoutForm isOpen={isOpen}/> : null}
        </div>
      </div>
    </section>
  )
}
