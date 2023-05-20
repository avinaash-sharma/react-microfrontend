import React, { useState, useEffect } from "react";
import { getProducts, getProductsById, currency } from "./products.js";
const HomeContent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        flexDirection: "row",
        flex: 1
      }}
    >
      {products.map((product) => (
       <div key={product.id} style={{display: "flex", flex: 1, margin: 10, flexDirection: 'column'}}>
            <img style={{width: 200, aspectRatio: '3/2'}} src={product.image} alt={product.name} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <p style={{ fontSize: '10px'}}>{product.name}</p>
            </div>
            <p style={{ fontSize: '12px'}}>{currency.format(product.price)}</p>
            <p style={{ fontSize: '10px'}}>{product.description}</p>
       </div>
      ))}
    </div>
  );
};

export default HomeContent;
