
import React from "react";
import { booksData } from "../data/books";

const Books = () =>{
    const fiveImages = booksData.slice(0,5);

    return(
        <>
        <div className="product-title">
            <h2>Books</h2>
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
export default Books