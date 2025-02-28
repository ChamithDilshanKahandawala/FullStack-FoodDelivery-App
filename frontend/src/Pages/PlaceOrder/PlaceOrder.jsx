import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
    const {getTotalCartAmmount} = useContext(StoreContext);

  return (
    <form action="" className="place_order">
      <div className="placeOrder_left">
        <p className="title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="multi_fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi_fields">
          <input type="text" placeholder="Zip-Code" />
          <input type="text" placeholder="County" />
        </div>
        <input type="phonenumber" placeholder="Phone Number" />
      </div>



      <div className="placeOrder_right">
        <div className="cart_total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmmount()}</p>
            </div>
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmmount()===0?0:getTotalCartAmmount() + 2}</b>
            </div>
          </div>
          <button>Procede To PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
