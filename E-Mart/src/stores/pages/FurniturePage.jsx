

import React,{useState} from "react";
import {furnitureData} from '../data/furniture'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const FurniturePage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleBrand(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        furnitureData : furnitureData.filter((orange) => selectProduct.includes(orange.brand))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {furnitureData.map((ph) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(ph.brand)}
                            onChange={() => handleBrand(ph.brand)}/>
                            {ph.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/furniture/${item.id}`}>
                            <div className="image-page">
                                <img src={item.image} alt=""/>
                            </div>
                        </Link>
                        <div className="product-model">
                            {item.brand},{item.model}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default FurniturePage