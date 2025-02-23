import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
   const {cartItems,food_list,removeFromCart} = useContext(StoreContext)
  
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
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div>
                  <div className="cart_item_item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price*cartItems[item._id]}</p>
                    <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>

                  </div>
                  <hr />
                </div>
              )
            }
          })}

        </div>
    </div>
  )
}

export default Cart