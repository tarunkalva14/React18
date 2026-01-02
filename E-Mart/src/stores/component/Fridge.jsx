
import React from "react";
import { fridgeData } from "../data/fridge";

const Fridge = () =>{
    const fiveImages = fridgeData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Fridge</h2>
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
export default Fridge