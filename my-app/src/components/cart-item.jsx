import React, { useContext } from 'react'
import { shopConText } from '../components/shop-context'

const CartItem=(props)=>{
    const { id, productName, price, productImage } = props.data;
    const {RemoveToCart,conItems,addToCart, UpdateNumber}=useContext(shopConText)
    return(
        <>
        <div className='cartItems'>
            <img src={productImage}/>
       
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    <b>₹{price}</b>
                </p>
                <div className='countHandler'>
                    <button onClick={()=>{
                            RemoveToCart(id)
                    }}>-</button>
                    <input value={conItems[id]}
                    onChange={(e)=>
                        UpdateNumber(Number(e.target.value),id)}
                    />
                    <button onClick={()=>{
                            addToCart(id)
                    }}>+</button>


                </div>
            </div>
        </div>
        </>
    )

}
export default CartItem;