
import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles = () =>{
    const fiveImages = mobileData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Mobiles</h2>
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
export default Mobiles