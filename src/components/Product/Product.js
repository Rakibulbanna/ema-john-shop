import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
   // console.log(props.product);
    const {name,img,price,stock,seller,star }=props.product;
    
    return (
        
        <div className="product">
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
              <h4 className="product-name">{name}</h4>
            <p>by : {seller}</p>
            <h5>price : ${price}</h5>  
             <p><small>only {stock} left in stock - order soon</small>
           </p>
           <Rating 
           initialRating={star} 
          emptySymbol="far fa-star fa-2x icon-color"
          fullSymbol="fas fa-star fa-2x icon-color"
          ></Rating>  <br/><br/>
            <button  
                onClick={() => props.handleAddToCart(props.product)}
             className="purchase-button">{<FontAwesomeIcon icon={faShoppingCart} />}add to cart</button>
            </div>
            
            

        </div>
    );
};

export default Product;