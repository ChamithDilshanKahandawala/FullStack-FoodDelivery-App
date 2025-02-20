import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className="foodDisplay">
        <h2>Top Dishes Near You</h2>
        <div className="foodDisplay_List">
            {food_list.map((item,index)=>{
              {console.log(category,item.category);}
              
              if (category ==="All" || category===item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
              }
                

            })}
        </div>
    </div>
  )
}

export default FoodDisplay