import React from "react";
import { Route } from "react-router-dom";

import Homepage from "../pages/homepage";
import Products from "../pages/products";
import Product_details from "../pages/product_details";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Transaction from "../pages/transaction";
import Contact from "../pages/contact";
import About from "../pages/about";
import Navbar from "../components/navbar";

const Routes = () =>{
    return(
        <div>
            <Navbar/>
        
            <switch>
                <Route path="/" exact Component={Homepage} />
                <Route path="/Product/:url" exact Component={Product_details} />
                <Route path="/Products" exact Component={Products} />
                <Route path="/Cart" exact Component={Cart} />
                <Route path="/Checkout" exact Component={Checkout} />
                <Route path="/Transaction" exact Component={Transaction} />
                <Route path="/Contact" exact Component={Contact} />
                <Route path="/About" exact Component={About} />
       
            </switch> 
        </div>
    )
}

      

export default Routes;