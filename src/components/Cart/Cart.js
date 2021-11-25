import React, { useState } from 'react';
import './Cart.css';
const Cart = (props) => {

    const {cart}=props;
    //console.log(cart);
    let BeforeTaxTotal=0;
   
    for (const product of cart){
        BeforeTaxTotal+=product.price;
        //console.log(product);
        
    }
    let shippingCharge= BeforeTaxTotal>0 ? 15 : 0;
    
        
    const Tax=(BeforeTaxTotal+shippingCharge)*0.10;
    const AfterTaxTotal=(BeforeTaxTotal+Tax+shippingCharge).toFixed(2);

    //const [cnt,setcnt] = useState([]);
   
   
    //  for (const i of cart) {
            
    //      for (const j of cnt){

    //         if (i!==j){
    //         setcnt(i);
    //         }
   
    //         }
    //     //cnt.push();
    // }  
   
  // console.log(cnt);
    
    /* */
    return (
        <div className="cart-container">
            <h2>order summary: </h2>
              <h5>Item ordered: {cart.length}</h5>
              <h5>Shipping Charge : ${shippingCharge}</h5>
              <h5>Before Tax : ${BeforeTaxTotal}</h5>
              <h5>Tax : ${Tax}</h5>
              <h2 className="orderTotal">Order Total : ${AfterTaxTotal} </h2>

               <h2>Oder list</h2>
          
                {
                    
                    cart.map(cartShow => 
                        
                        <div className="cart-selected-container">
                           
                        <div className="cart-selected-header">
                            <p>{cartShow.name}</p>
                        </div >
                        <div>
                            <img src={cartShow.img} alt=""/>
                        </div>
                        </div>
                 )
                }

              
              
        </div>
    );
};

export default Cart;