
import React,{useState} from "react";
import {menData} from '../data/men'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const MensPage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleBrand(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        menData : menData.filter((orange) => selectProduct.includes(orange.brand))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {menData.map((m) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(m.brand)}
                            onChange={() => handleBrand(m.brand)}/>
                            {m.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/men/${item.id}`}>
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
export default MensPage