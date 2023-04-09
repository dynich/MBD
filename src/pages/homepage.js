import React, { Component } from "react";
import Styles from "../components/styles/global.module.css";
import Parfumcard from "../assets/parfum1.jpg";

class Homepage extends Component{
    render(){
        return(
            <React.Fragment>
                <div className={Styles.wrapper}>
                    <div className={Styles.card}>
                        <div className={Styles.row}>
                            <div className={Styles.input_group}>
                                <input type="search" placeholder="Cari Produk"/>
                                <button>Cari</button>
                            </div>
                        </div>
                    <div className={Styles.row}>
                        
                        </div> 
                        <div className={Styles.gridproduk}>
                            <div className={Styles.imagectn}>
                                <img className={Styles.cardimg} src={Parfumcard} size={160}>
                                </img>
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
                            </div>
                    </div>
                    
                </div>
            </React.Fragment>
            
            
            
        )
    }
}

export default Homepage;