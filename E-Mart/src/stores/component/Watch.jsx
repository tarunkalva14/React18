import React from "react";
import { watchData } from "../data/watch";

const Watch = () =>{
    const fiveImages = watchData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Watches</h2>
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
export default Watch