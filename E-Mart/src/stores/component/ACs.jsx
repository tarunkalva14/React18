import React from "react";
import { acData } from "../data/ac";

const ACs = () =>{
    const fiveImages = acData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>AC's</h2>
        </div>
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
export default ACs