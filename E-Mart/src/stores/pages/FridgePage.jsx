
import React,{useState} from "react";
import {fridgeData} from '../data/fridge'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const FridgePage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleBrand(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        fridgeData : fridgeData.filter((orange) => selectProduct.includes(orange.brand))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {fridgeData.map((f) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(f.brand)}
                            onChange={() => handleBrand(f.brand)}/>
                            {f.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/fridge/${item.id}`}>
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
export default FridgePage