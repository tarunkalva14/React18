import React from "react";
import { womanData } from "../data/woman";

const Womans = () =>{
    const fiveImages = womanData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Woman's Wear</h2>
        </div>
            <div className="product-section"> 
                {fiveImages.map((item) =>{
                    return(
                        <div className="image-section">
                            <img className="image-product" src={item.image} alt=""/>
                        </div>
                        );
                })}
            </div>
        </>
    );
};
export default Womans;