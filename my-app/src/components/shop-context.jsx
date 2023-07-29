import React, { useState } from "react";
import {PRODUCTS} from '../assets/Products';
import { createContext } from "react";
export const shopConText=createContext();
const DefaultItemid=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

 const ShopCartConstProvider=(props)=>{

    const [conItems,setconItems]=useState(DefaultItemid());
    const addToCart=(itemId)=>{
       
        setconItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]+1,
        }));
    
        console.log(conItems)
        
    }
    const RemoveToCart=(itemId)=>{
        setconItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]-1,
        }));
      
        
    }
    const UpdateNumber=(NewAmount,ItemID)=>{
        setconItems((prev)=>({
            ...prev,
            [ItemID]:NewAmount,
        }))
    }
    
  
const CartItemContext={conItems,addToCart,RemoveToCart,UpdateNumber};

    return(
        <shopConText.Provider value={CartItemContext}>
            {props.children}
        </shopConText.Provider>
    );
}
export default ShopCartConstProvider
