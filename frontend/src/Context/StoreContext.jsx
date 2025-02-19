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

    useEffect(()=>{
        console.log(cartItems);

    },[cartItems])



            const contextValue = { 
                food_list ,
                cartItems,
                setCartitems,
                addToCart,
                removeFromCart,

            }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
