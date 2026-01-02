
import React,{useState} from "react";
import {watchData} from '../data/watch'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const WatchPage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleBrand(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        watchData : watchData.filter((orange) => selectProduct.includes(orange.brand))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {watchData.map((m) => {
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
                        <Link to = {`/watch/${item.id}`}>
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
export default WatchPage