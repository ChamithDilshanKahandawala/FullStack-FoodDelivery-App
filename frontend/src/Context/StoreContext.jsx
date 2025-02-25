import { createContext, useEffect } from "react";
import { food_list } from '../assets/assets'; // Ensure this is correctly imported
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartitems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartitems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmmount = () =>{
        let totalAmount =0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id ===item);
            totalAmount+= itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }



            const contextValue = { 
                food_list ,
                cartItems,
                setCartitems,
                addToCart,
                removeFromCart,
                getTotalCartAmmount,

            }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
