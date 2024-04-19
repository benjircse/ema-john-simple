
/**
 * 
  const addToDb = id =>{
  localStorage.setItem(id , 1);  **** ai code dara localstorage a data set kora hoy.{setItem ar maze 2 ta propaty set kora lage key and value}
}
 * */ 


/*
 akta id bar bar add korar jonno amader age dekhte hobe oi id ta localStorage a ase naki?

 Example: 
-------------------------------agula code change hoyese------------
  const addToDb = id =>{
    const quntity = localStorage.getItem(id);
    if(quantity){
      const newQuantity=parseIne(quantity) + 1 ;  [NOTE quantity akti sting tai atake parseInt(quantity) + 1 bosate hobe]
      localStorage.setItem(id ,newQuantity);
    }
    else{
      localStorage.setItem(id , 1);
    }
  }
*/ 

// ---------------------------------------------------------------------------------


/*
 --------- nicer code dara amra item set and quntity baranor kaj ta korsi------------
*/ 

/*
  amra jodi key and value set korte cai tahle funtion maze sobar upore ta bosate hobe 

 const addToDb = id =>{
  let shoppingCart = {};
  akhon r amra quntity localstorage a giye dekhbo na karon seta akhon shoppingCart mazei chack korte pari,

  const quntity = shoppingCart;
  if(quantity){
      const newQuantity= quantity + 1 ; 
      shopingCart[id]=newQuantity;  [akhane id man holo newQuntity]
  }
  else{
    shopingCart[id]=1;
  }
  localStorage.setItem('shopping-cart',json.stinhfy(shoppingCart))  [akhane key=shopping-Cart & value=shoppingCart]

  ata upor theke sobar nice anbo karon sob update hoye asar pore ata call korbe
}
*/ 


/*
 amra abar localstorage theke data na nibo 

 const storadCart = localstorage.getItem('shopping-cart') [ja name set korsi sei namei paite hobe]
 if(storedCart){
  shopingCart= json.parts(storedCart)
 }
 else{
  shoppingCart = {};
 }
*/   


/*
 -----------------------Over All Code-----------------

 const addToDb =(id)=>{
  let shoppingCart;
  ------------data add & quntity add------------
   const quntity = shoppingCart;
  if(quantity){
      const newQuantity= quantity + 1 ; 
      shopingCart[id]=newQuantity;  
  else{
    shopingCart[id]=1;
  }
  localStorage.setItem('shopping-cart',json.stinhfy(shoppingCart))
}
 ---------------get localstorage---------------
 const storadCart = localstorage.getItem('shopping-cart')
 if(storedCart){
  shopingCart= json.parts(storedCart)
 }
 else{
  shoppingCart = {};
 }
 }


*/ 

