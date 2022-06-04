import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./companents/pages/home";
import Header from "./companents/pages/header";
import Footer from "./companents/pages/footer";
import ShopDetails from "./companents/pages/shopDetails";
import Basket from "./companents/pages/basket";
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
