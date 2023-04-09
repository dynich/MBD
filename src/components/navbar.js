import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css";
import Logo from "../assets/Logo.jpg";
import { BsCart2 } from "react-icons/bs";

class Navbar extends Component {
  render() {
    return (
      <nav className={Styles.header}>
        <div className={Styles.logoctn}>
          <img className={Styles.logo} src={Logo} alt="Logo" />
          <h1>TOKO PARFUM GES</h1>
        </div>
        <ul className={Styles.topmenu}>
          <li>
            <Link to="/">Homepage</Link>{" "}
          </li>
          <li>
            <Link to="/Products">Product</Link>{" "}
          </li>
          <li>
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            <Link to="/Transaction">Transaction</Link>{" "}
          </li>
          <li>
            <Link to="/Contact">Contact</Link>{" "}
          </li>
          <li>
            <Link to="/Checkout">Checkout</Link>{" "}
          </li>
          <li>
            <Link to="/Cart">Cart</Link>{" "}
          </li>
        </ul>
        <div className={Styles.akunctn}>
            <p>
                Akun Saya
            </p>
            <button className={Styles.keranjang}>
                <BsCart2 size={25}/>
            </button>
            
        </div>
      
      </nav>
    );
  }
}

export default Navbar;
