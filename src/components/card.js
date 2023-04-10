import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/card.module.css";
import Parfumcard from "../assets/parfum1.jpg";
import { BsCart2 } from "react-icons/bs";
import axios from "axios";

function Card ()  {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
      }, []);
    
      const getProducts = async () => {
        const response = await axios.get("http://localhost:3000/produk");
        setProducts(response.data);
      };

 
        return (  
            <>
                {products.map((product, index) => (
                <div className={Styles.item_card} key={product.id}>
                  <img className={Styles.images} src={product.url} alt="item produk"/>
                  <h2>{product.title}</h2>
                  <h4>IDR {product.price}</h4>
                  <button className={Styles.btn_buy} >Buy</button>
                </div>
              ))}
            </>
        )
      
    
}
  
  export default Card;