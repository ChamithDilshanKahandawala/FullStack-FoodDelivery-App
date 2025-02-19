import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="foodItem_Image_container">
        <img className='foodItem_Image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img 
            className='add' 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white} 
            alt="Add Item" 
          />
        ) : (
          <div className="fooditem_counter">
            <img 
              src={assets.remove_icon_red} 
              onClick={() => removeFromCart(id)} 
              alt="Remove Item" 
            />
            <p>{cartItems[id]}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add More" 
            />
          </div>
        )}
      </div>
      <div className="foodItem_Info">
        <div className="foodItem_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='foodItem_description'>{description}</p>
        <p className='foodItem_price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
