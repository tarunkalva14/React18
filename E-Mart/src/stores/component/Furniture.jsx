import React from "react";
import { furnitureData } from "../data/furniture";

const Furniture = () =>{
    const fiveImages = furnitureData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Furniture</h2>
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
export default Furniture