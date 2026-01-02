
import React from "react";
import { speakerData } from "../data/speaker";

const Speakers = () =>{
    const fiveImages = speakerData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Speakers</h2>
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
export default Speakers