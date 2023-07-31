import React, { useContext } from 'react'
import { PRODUCTS } from '../assets/Products';
import { shopConText } from '../components/shop-context'
import CartItem from './cart-item';
import {useNavigate} from 'react-router-dom'
const Cart = () => {
    const { conItems,CalculateTotalPrice} = useContext(shopConText);
    const navigate=useNavigate();
    const TotalAmount=CalculateTotalPrice();


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
                {TotalAmount>0?
                <>
                <div className='checkout'>
                    <p style={{textAlign:'center',fontSize:'1.4rem'}}>SubTotal:₹{TotalAmount}</p>
                    <button onClick={()=>navigate('/')}>Continue Shopping</button>
                    <button>CheckOut</button>
                    </div>
                    </>:<h1 style={{marginTop:'2rem',fontFamily:'sans-serif'}}>Your cart is Empty</h1>
                }
            </div>
            
        </>

    );
}
export default Cart;