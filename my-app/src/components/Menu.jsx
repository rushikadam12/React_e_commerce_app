import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
export const Navmenu=()=>{
    return(
        <>
        <div className='container'>
            <div className='navlink' style={{paddingRight:"20px"}}>
                <nav>
                    <Link to="/">SHOP</Link>
                    <Link to="/cart"><ShoppingCart size={39}/></Link>
                </nav>
             
             </div>
        </div>
        </>

    );
}
