import React, { useContext } from 'react'
import { shopConText } from '../components/shop-context'


const ProductShop = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart,conItems}=useContext(shopConText);
    const cartItemAmount=conItems[id]
    return (
        <>
     
            <div className='product'>
                <img src={productImage} />
           
            <div className='description'>
                <p><b>{productName}</b></p>
                <p><b>₹{price}</b></p>
           
            <button className='addToCartBttn' onClick={()=>(addToCart(id))}>Add to cart
             {cartItemAmount>0&&<>({cartItemAmount})</>}
            </button>
            </div>
            </div>
    
        </>

    );
}

export default ProductShop;