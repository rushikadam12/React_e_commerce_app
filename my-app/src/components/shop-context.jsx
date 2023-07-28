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
        
    }
    const RemoveToCart=(itemId)=>{
        setconItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]-1,
        }));
        
    }

const CartItemContext={conItems,addToCart,RemoveToCart};

    return(
        <shopConText.Provider value={CartItemContext}>
            {props.childern}
        </shopConText.Provider>
    );
}
export default ShopCartConstProvider
