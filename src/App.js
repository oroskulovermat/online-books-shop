import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./companents/home";
import Header from "./companents/header";
import Footer from "./companents/footer";
import ShopDetails from "./companents/shopDetails";
import Basket from "./companents/basket";
import Categories from "./companents/card/categories";


function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="/shop-details/:id" element={< ShopDetails/>}/>
                <Route path="/shop-basket" element={< Basket/>}/>
                <Route path="/shop-category/:idCategory" element={< Categories/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
