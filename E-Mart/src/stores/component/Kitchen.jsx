
import React from "react";
import { kitchenData } from "../data/kitchen";

const Kitchen = () =>{
    const fiveImages = kitchenData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Kitchen</h2>
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
export default Kitchen