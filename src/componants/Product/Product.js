import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    const { img, name, price, seller, shipping } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h1 className='name'>{name}</h1>
            <h2 className='price'>price:{price}</h2>
            <h3>seller:{seller}</h3>
            <h3>shipping:{shipping}</h3>
            <button onClick={() => props.handelAddToCart(props.product)} className='cart-btn'>
                <p className='button-text'>
                    Add to Cart
                </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;