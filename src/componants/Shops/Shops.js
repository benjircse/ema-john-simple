import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shops.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shops = () => {
    const [products,setProducts] = useState([]);
    const [cart ,setCart]=useState([]);
    useEffect(()=>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
    },[]);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
             
            
        }
        setCart(savedCart)
    },[products])

    const handelAddToCart= (product)=>{
       const newCart= [...cart ,product]  
       setCart(newCart)
       addToDb(product.id)
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
