
import React,{useState} from "react";
import {acData} from '../data/ac'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const ACsPage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleCompay(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        acData : acData.filter((orange) => selectProduct.includes(orange.company))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {acData.map((ph) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(ph.company)}
                            onChange={() => handleCompay(ph.company)}/>
                            {ph.company}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/ac/${item.id}`}>
                            <div className="image-page">
                                <img src={item.image} alt=""/>
                            </div>
                        </Link>
                        <div className="product-model">
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default ACsPage