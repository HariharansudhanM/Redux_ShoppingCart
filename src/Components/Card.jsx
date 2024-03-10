import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";

function Card({ title, image, description, product }) {
  const { handleCart } = useContext(ProductsContext);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={() => handleCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
