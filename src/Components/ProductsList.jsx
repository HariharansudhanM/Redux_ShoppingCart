import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";
import Card from "./Card";

function ProductsList() {
  const { products } = useContext(ProductsContext);
  return (
    <>
      {products.map((product, index) => {
        return (
          <Card
            image={product.images[0]}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            product={product}
            brand={product.brand}
          />
        );
      })}
    </>
  );
}

export default ProductsList;
