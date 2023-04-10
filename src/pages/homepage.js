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
                    </div>  
                </div>
            </React.Fragment>
            
            
            
        )
    }
}

export default Homepage;