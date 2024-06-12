import React, { useContext } from "react";
// import { ProductsContext } from "../../Context/ProductsProvider";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

function ProductsList() {
  /////Context
  // const { products } = useContext(ProductsContext);

  ////////Redux
  // const dispatch = useDispatch();
  const { products } = useSelector((state) => state.app);
  // console.log(products);

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
