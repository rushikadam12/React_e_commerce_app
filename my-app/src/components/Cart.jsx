import React, { useContext } from 'react'
import { PRODUCTS } from '../assets/Products';
import { shopConText } from '../components/shop-context'
import CartItem from './cart-item';
const Cart = () => {
    const { conItems } = useContext(shopConText);
    return (
        <>
            <div className='cart'>
                <div>
                    <h1>Your Cart</h1>
                </div>

                <div className='cart'>
                    {PRODUCTS.map((product) => {
                        if (conItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                      
                    })
                    }


                </div>
            </div>
        </>

    );
}
export default Cart;