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
    const CalculateTotalPrice=()=>{
        let totalvalue=0;
        for(const item in conItems){
            if(conItems[item]>0){
                let ValueCheck=PRODUCTS.find((product)=>product.id===Number(item));
                totalvalue+=conItems[item]*ValueCheck.price;
            }
        }
        return totalvalue;

    }
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
    
  
const CartItemContext={conItems,addToCart,RemoveToCart,UpdateNumber,CalculateTotalPrice};

    return(
        <shopConText.Provider value={CartItemContext}>
            {props.children}
        </shopConText.Provider>
    );
}
export default ShopCartConstProvider
