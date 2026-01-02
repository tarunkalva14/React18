
import React from "react";
import { tvData } from "../data/tv";

const TVs = () =>{
    const fiveImages = tvData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>TV</h2>
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
export default TVs