import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
   const {cartitems,food_list,removeFromCart} = useContext(StoreContext)
  
  return (
    <div className="cart">
        <div className="cart_items">
          <div className="cart_items_title">
            <p>Items</p>
            <p>Tittle</p>
            <p>Price</p>
            <p>Quentity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          

        </div>
    </div>
  )
}

export default Cart