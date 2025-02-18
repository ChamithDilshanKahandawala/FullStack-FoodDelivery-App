import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {



  return (
    <div className="foodItem">
        <div className="foodItem_Image_container">
            <img className='foodItem_Image' src={image} alt="" />
        </div>
        <div className="foodItem_Info">
            <div className="foodItem_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='foodItem_desctiption'>{description}</p>
            <p className='foodItem_price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem