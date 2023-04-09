import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/global.module.css";
import Banner from "../assets/banner.jpeg";
import { BsCart2 } from "react-icons/bs";

class Hero extends Component {
  render() {
    return (
      <main className={Styles.heroctn}>
        <div className={Styles.imagectn}>
          <img className={Styles.banner} src={Banner}></img>
        </div>

        <div className={Styles.konten}>
            <div className={Styles.quotes1}>
                A House of Authentic Fragrance
            </div>
            <div className={Styles.quotes2}>
                Smell is a word
            </div>
            <div className={Styles.quotes2}>
                Perfume is literature
            </div>
            <div className={Styles.isian1}>
                apa aja dah bodoamat
            </div>
            <button className={Styles.tombol}>
                Buy Now
            </button>
        </div>
      </main>
    );
  }
}

export default Hero;
