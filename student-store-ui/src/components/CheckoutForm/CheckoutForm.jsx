import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(){
    return(
        <div className="checkout-form">
            <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>
            <div className="input-field">
                <label className="label">Name</label>
                <div className="control ">
                    <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
                </div>
            </div>
            <div className="input-field">
                <label className="label">Email</label>
                <div className="control ">
                    <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>                
                </div>
            </div>
        </div>
    ) 
}