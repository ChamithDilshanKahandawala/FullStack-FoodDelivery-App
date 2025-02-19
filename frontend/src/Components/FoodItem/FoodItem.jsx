import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const FoodItem = ({id,name,price,description,image}) => {

  const [itemCount, setItemCount] = useState(0)


  return (
    <div className="foodItem">
        <div className="foodItem_Image_container">
            <img className='foodItem_Image' src={image} alt="" />
            {!itemCount
                ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" srcset="" />
                :<div className="fooditem_counter">
                  <img src={assets.remove_icon_red} onClick={()=>setItemCount(prev=>prev-1)} alt="" />
                  <p>{itemCount}</p>
                  <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                </div>
            
            }
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