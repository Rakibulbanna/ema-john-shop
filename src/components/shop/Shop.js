import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../shop/Shop.css';
import {addToDb, getStoredCart } from '../../utilities/fakedb'
const Shop = () => {
    const [products, setproducts] = useState([]);

    const [cart,setCart] = useState([]);

    const [displayProducts,setdisplayProducts] = useState([]);

    useEffect (() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => 
            {
                setproducts(data);
                setdisplayProducts(data);
            });  
    },[])
 
    useEffect(() => {
        if (products.length){

        const saveCart = getStoredCart();

        const storedCart = [];

        for (const key in saveCart){
            const addedProduct = products.find( product => product.key === key);
            
            if (addedProduct){
               const quantity= saveCart[key];
               addedProduct.quantity=quantity;
               
               //console.log(addedProduct);

              storedCart.push(addedProduct);  
            }

            
        }

        setCart(storedCart);
       // console.log(saveCart); 

        }
       
    }, [products])

    const handleAddToCart =(product) => {
        const newCart = [...cart,product];
        setCart(newCart);

        //save to local database
        addToDb(product.key);
        
    }

    const handelSearch = event =>{
        const searchText = event.target.value;

        const matcherdProdect = products.filter (product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setdisplayProducts(matcherdProdect);

        console.log(matcherdProdect.length);
    }
    return (
        <div>
            <div className="search-container">
            <input type="text"
            onChange={handelSearch}
            placeholder="serch here" />
            </div>

            <div className="shop-container">
              <div className="product-container">
                  <h2>product : {products.length}</h2>
                  {
                      displayProducts.map(product => <Product product={product} key={product.key}
                        handleAddToCart={handleAddToCart} ></Product>)
                  }
              </div>
              <div>
                  <Cart cart={cart}></Cart>
                  
              </div>
            </div>
            
        </div>
    );
};

export default Shop;