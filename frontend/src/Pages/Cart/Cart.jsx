import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
   const {cartItems,food_list,removeFromCart,getTotalCartAmmount} = useContext(StoreContext)

   const navigate = useNavigate();
  
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

        <div className="cart_bottom">
          <div className="cart_total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart_total_details">
                <p>
                  Subtotal
                </p>
                <p>${getTotalCartAmmount()}</p>
              </div>
              <div className="cart_total_details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart_total_details">
                <b>Total</b>
                <b>${getTotalCartAmmount()===0?0:getTotalCartAmmount()+2}</b>
              </div>
              
            </div>
            <button onClick={()=>navigate('/order')}>Procede To Checkot</button>
          </div>
          <div className="cart_promo_code">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart_promoCode_input">
                <input type="text" placeholder='Promo Code' />
                <button >Submit</button>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Cart