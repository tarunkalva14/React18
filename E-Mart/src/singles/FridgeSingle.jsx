



import React from "react";
import {fridgeData} from '../stores/data/fridge.js'
import { useParams } from 'react-router-dom'
import NavBar from "../stores/component/NavBar.jsx";
import { useCart } from "../stores/context/CartContext.jsx";
const FridgeSingle =() =>{
    const {id} = useParams()

    const {addToCart, cartItems} = useCart()

    const product = fridgeData.find((item)=>item.id === id)
    
    return(
       <>
       <NavBar/>
        <div className="id-page">
            <div className="id-image">
                <img src={product.image} alt=""/>
            </div>
            <div className="image-details">
                <div className="id-company space">
                    <h2>{product.company}</h2>
                </div>
                <div className="id-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="id-price space">
                <h2>{product.price}</h2>
            </div>
            <div className="id-description space">
                <p>
                    {product.description}
                </p>
            </div>
            <button onClick={()=> addToCart(product)}> Add to Cart</button>
            </div>
        </div>
       </>
    );
}
export default FridgeSingle