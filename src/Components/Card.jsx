import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";

function Card({ title, image, description, product, price, category, brand }) {
  const { cart, setCart } = useContext(ProductsContext);

  function handleAddToCart() {
    setCart(() => [
      ...cart,
      {
        id: product.id,
        item: title,
        cost: price,
        quantity: 1,
        about: description,
        make: brand,
      },
    ]);
  }

  let flag = cart.find((el) => el.id == product.id);

  return (
    // <div classNameName="card" style={{ width: "50rem" }}>
    //   <img src={image} classNameName="card-img-top img-fluid" alt="..." />
    //   <div classNameName="card-body">
    //     <h5 classNameName="card-title">{title}</h5>
    //     <p classNameName="card-text">{description}</p>
    //     <p classNameName="card-text">{price}</p>
    //     <button classNameName="btn btn-primary">Add to cart</button>
    //   </div>
    // </div>

    <div className="card text-center">
      <div className="card-header">{brand}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">About: {description}</p>
        <p className="card-text">Price💴: {price}</p>
        {flag == undefined ? (
          <button
            className="btn btn-success"
            onClick={() => handleAddToCart(product.id)}
          >
            Add to cart
          </button>
        ) : (
          <button className="btn btn-success" disabled>
            Add to cart
          </button>
        )}
      </div>
      <div className="card-footer text-body-secondary">
        Offer ends in 2 days
      </div>
    </div>
  );
}

export default Card;
