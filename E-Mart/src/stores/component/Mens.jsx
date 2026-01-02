import React from "react";
import { menData } from "../data/men";

const Mens = () =>{
    const fiveImages = menData.slice(0,5);

    return(
        <>
        <h2>Men's Wear</h2>
            <div className="product-section"> 
                {
                    fiveImages.map((item) =>{
                        return(
                            <div className="image-section">
                                <img className="image-product" src={item.image} alt=""/>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export default Mens