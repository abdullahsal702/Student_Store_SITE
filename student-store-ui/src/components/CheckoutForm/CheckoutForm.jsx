import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({ isOpen, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, receipt }){
    return(
        <div className="checkout-form">
            <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>
            <div className="input-field">
                <label className="label">Name</label>
                <div className="control ">
                    <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value={checkoutForm.name} onChange={(evt) => handleOnCheckoutFormChange(evt.target.name, evt.target.value)}/>
                </div>
            </div>
            <div className="input-field">
                <label className="label">Email</label>
                <div className="control ">
                    <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(evt) => handleOnCheckoutFormChange(evt.target.name, evt.target.value)}/>                
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input name="termsAndConditions" type="checkbox"/><span className="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
                    </label>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button checkout-button" onClick={(evt)=>handleOnSubmitCheckoutForm(evt)}>Checkout</button>
                </div>
            </div>
            {receipt.map((element) => {
                return <p>{element}</p>
            })}

        </div>
    ) 
}