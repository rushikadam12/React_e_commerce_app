import React from 'react'
import {PRODUCTS} from '../assets/Products'
import ProductShop from './Productshop';
const Home=()=>{
    return(
        <>
        <div className='shop'>
            <div className='shopTitle'>
                <h1>NEXUS SHOP</h1>
            </div>
            <div className='products'>
            {PRODUCTS.map((product)=><ProductShop data={product}/>)}
            </div>
            
        </div>
        </>
    );
}
export default Home;