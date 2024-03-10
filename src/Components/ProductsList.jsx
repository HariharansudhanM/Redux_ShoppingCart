import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";
import Card from "./Card";

function ProductsList() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <Card
              image={product.images[0]}
              key={product.id}
              title={product.title}
              description={product.description}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
