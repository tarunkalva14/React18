
import React,{useState} from "react";
import {booksData} from '../data/books'
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

const BooksPage =() => {

    const [selectProduct, setSelectProduct] = useState([]);

    function handleTitle(job){
        if(selectProduct.includes(job)){
            setSelectProduct(selectProduct.filter(item => item !== job))
        }else{
            setSelectProduct([...selectProduct, job])
        }
    }

    const filterProduct = selectProduct.length===0?
        booksData : booksData.filter((orange) => selectProduct.includes(orange.title))

    return(
        <>
        <NavBar/>
        <div className="full-page">
            <div className="product-select">
            {booksData.map((book) => {
                return(
                    <div className="product-input">
                        <label>
                            <input type="checkbox"
                            checked = {selectProduct.includes(book.title)}
                            onChange={() => handleTitle(book.title)}/>
                            {book.title}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="page-section">
            {filterProduct.map((item) => {
                return(
                    <div>
                        <Link to = {`/books/${item.id}`}>
                            <div className="image-page">
                                <img src={item.image} alt=""/>
                            </div>
                        </Link>
                        <div className="product-model">
                            {item.title},{item.author}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default BooksPage