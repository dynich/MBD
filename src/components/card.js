import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/global.module.css";
import Parfumcard from "../assets/parfum1.jpg";
import { BsCart2 } from "react-icons/bs";

class Card extends Component {
    render() {
      return (
        <main className={Styles.gridproduk}>
            <div className={Styles.imagectn}>
                <img className={Styles.cardimg} src={Parfumcard} size={160}></img>
            </div>
            <div className={Styles.productname}>
                Acqua di Gio
            </div>
            <div className={Styles.price}>
                <p>
                    IDR
                </p>
                <p>
                    15000
                </p>
            </div>

        </main>
      );
    }
  }
  
  export default Card;