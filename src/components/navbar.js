import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css"

class Navbar extends Component{
    render(){
        return(
            <div className={Styles}>
                <div>
                    <img src=""/>
                </div>
                    <ul>
                        <li><Link to="/">Homepage</Link> </li>
                        <li><Link to="/Product">Product</Link> </li>
                        <li><Link to="/Product/:url">Product_details</Link> </li>
                        <li><Link to="/Cart">Cart</Link> </li>
                        <li><Link to="/About">About</Link> </li>
                        <li><Link to="/Transaction">Transaction</Link> </li>
                        <li><Link to="/Contact">Contact</Link> </li>
                        <li><Link to="/Checkout">Checkout</Link> </li>

                    </ul>
            </div>
        )
    }
}

export default Navbar