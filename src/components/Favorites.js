import React, { useEffect, useState } from "react";
import Title from "./ui/Title";
import Products from "api/product.json";
import ProductItem from "./ui/ProductItem";

function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      Favorites
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
