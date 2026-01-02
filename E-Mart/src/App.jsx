
import React from "react";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import LandPage from "./stores/pages/LandPage";
import KitchenPage from "./stores/pages/KitchenPage";
import MobilePage from "./stores/pages/MobilePage";
import ACsPage from "./stores/pages/ACsPage";
import ComputerPage from "./stores/pages/ComputerPage";
import MensPage from "./stores/pages/MensPage";
import WomansPage from "./stores/pages/WomansPage";
import FurniturePage from "./stores/pages/FurniturePage";
import WatchPage from "./stores/pages/WatchPage";
import TvPage from "./stores/pages/TvPage";
import BooksPage from "./stores/pages/BooksPage";
import FridgePage from "./stores/pages/FridgePage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart";
import MenSingle from "./singles/MenSingle";
import AcSingle from "./singles/AcSingle";
import ComputerSingle from "./singles/ComputerSingle";
import BooksSingle from "./singles/BooksSingle";
import FridgeSingle from "./singles/FridgeSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import KitchenSingle from "./singles/KitchenSingle";
import SpeakerSingle from "./singles/SpeakerSingle";
import WomanSingle from "./singles/WomanSingle";
import WatchSingle from "./singles/WatchSingle";
import TvSingle from "./singles/TvSingle";


const App = () => {

    return(
        <div>
            <Routes>
                <Route path="/" element = {<LandPage/>} />
                <Route path="/kitchen" element = {<KitchenPage/>}/>
                <Route path="/mobile" element ={<MobilePage/>}/>
                <Route path="/ac" element = {<ACsPage/>}/>
                <Route path="/computer" element = {<ComputerPage/>}/>
                <Route path="/furniture" element = {<FurniturePage/>}/>
                <Route path="/men" element = {<MensPage/>}/>
                <Route path="/woman" element = {<WomansPage/>}/>
                <Route path="/watch" element = {<WatchPage/>}/>
                <Route path="/tv" element ={<TvPage/>}/>
                <Route path="/books" element ={<BooksPage/>}/>
                <Route path="/fridge" element ={<FridgePage/>}/>
                <Route path="/speaker" element ={<SpeakerPage/>}/>
                    <Route path="/mobile/:id" element={<MobileSingle/>}/>
                    <Route path="/men/:id" element={<MenSingle/>}/>
                    <Route path="/ac/:id" element={<AcSingle/>}/>
                    <Route path="/computer/:id" element={<ComputerSingle/>}/>
                    <Route path="/books/:id" element={<BooksSingle/>}/>
                    <Route path="/fridge/:id" element={<FridgeSingle/>}/>
                    <Route path="/furniture/:id" element={<FurnitureSingle/>}/>
                    <Route path="/kitchen/:id" element={<KitchenSingle/>}/>
                    <Route path="/speaker/:id" element={<SpeakerSingle/>}/>
                    <Route path="/woman/:id" element={<WomanSingle/>}/>
                    <Route path="/watch/:id" element={<WatchSingle/>}/>
                    <Route path="/tv/:id" element={<TvSingle/>}/>
                <Route path="/cart" element={<UserCart/>}/>    
            </Routes>
        </div>
    );
}
export default App
