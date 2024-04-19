import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity= 1;
        }
       quantity=quantity+product.quantity;
        total = total + product.price*product.quantity;
        shipping= shipping + product.shipping *product.quantity;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandtotal= total+shipping+ parseInt(tax)
     
    return (
        <div className='cart'>
            <h2 className='order-sammary'>Order summary</h2>
             <h3>Selected Items: {quantity}</h3>  
             <h3>Total Price: ${total}</h3>  
             <h3>Total Shipping Charge: ${shipping} </h3>  
             <h3>Tax: ${tax}</h3>  
             <h2 className='grand-total'>Grand Total: ${grandtotal}</h2>  
        </div>
    );
};

export default Cart;