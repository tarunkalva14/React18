
import React from "react";
import { computerData } from "../data/computers";

const Computers = () =>{
    const fiveImages = computerData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Computers</h2>
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
export default Computers