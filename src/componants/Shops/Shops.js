import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shops.css'
import Cart from '../Cart/Cart';
const Shops = () => {
    const [products,setProducts] = useState([]);
    const [cart ,setCart]=useState([]);
    useEffect(()=>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
    },[]);


    const handelAddToCart= (product)=>{
       const newCart= [...cart ,product]  
       setCart(newCart)
    }
    return (
        <div className='shops-container'>
           <div className='products-container'>
             
           {
                products.map(product =><Product
                     key={product.id}
                      product={product}  
                      handelAddToCart={handelAddToCart} 
                       ></Product>)
            }
           </div>
           <div className='cart-container'>
             <Cart cart={cart}></Cart>                      
           </div>
        </div>
    );
};

export default Shops;
