import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";

function Cart() {
  const { cart, removeProduct } = useContext(ProductsContext);
  const [quantity, setQauntity] = useState(1);

  function addQuantity() {
    if (quantity < 3) {
      setQauntity(quantity + 1);
    }
  }
  function subtractQuantity() {
    if (quantity > 1) {
      setQauntity(quantity - 1);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>{cart[0]?.title}</h3>
          <p>{cart[0]?.description}</p>
          {cart.length > 0 && <p>Quantity = {quantity}</p>}
        </div>
        <div className="col">
          {cart.length > 0 && <button onClick={subtractQuantity}>-</button>}
          <h3>{cart[0]?.price}</h3>
          {cart.length > 0 && <button onClick={addQuantity}>+</button>}
        </div>
        {cart.length > 0 && <h1>total : {cart[0]?.price * quantity}</h1>}
        {cart.length > 0 && (
          <button onClick={removeProduct}>Remove from the cart</button>
        )}
      </div>
    </div>
  );
}

export default Cart;
