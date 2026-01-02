
import React,{useState} from "react";
import {mobileData} from '../data/mobiles'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const MobilePage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleCompay(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        mobileData : mobileData.filter((orange) => selectProduct.includes(orange.company))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {mobileData.map((phone) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(phone.company)}
                            onChange={() => handleCompay(phone.company)}/>
                            {phone.company}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/mobile/${item.id}`}>
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
export default MobilePage