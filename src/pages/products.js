import React, { Component } from "react";

class Products extends Component{
    render(){
        return(
            <div className={StyleSheet.input_group}>
                <input type="search" placeholder="Cari Produk"/>
                <button>Cari</button>
            </div>
            
        )
    }
}

export default Products;