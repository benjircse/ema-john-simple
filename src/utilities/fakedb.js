// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}


// https://6631e22b2cb0ff8ee7aabc64--tubular-kelpie-8e1a45.netlify.app/


// const addToDb =(id)=>{
//     let shoppingCart;
//     ------------data add & quntity add------------
//      const quntity = shoppingCart;
//     if(quantity){
//         const newQuantity= quantity + 1 ; 
//         shopingCart[id]=newQuantity;  
//     else{
//       shopingCart[id]=1;
//     }
//     localStorage.setItem('shopping-cart',json.stinhfy(shoppingCart))
//   }
//    ---------------get localstorage---------------
//    const storadCart = localstorage.getItem('shopping-cart')
//    if(storedCart){
//     shopingCart= json.parts(storedCart)
//    }
//     
//    }
  
  
  