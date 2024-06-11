import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";

function CartData({ item, about, quantity, cost, id, make }) {
  const { cart, setCart, bill, setBill } = useContext(ProductsContext);
  const [qty, setqty] = useState(quantity);

  useEffect(() => {
    handleBill(totalPrice);
  }, []);

  let totalPrice = cost * qty;

  function handleBill(totalPrice) {
    setBill(() => [
      ...bill.filter((e) => e.id !== id),
      {
        id: id,
        totalPrice: totalPrice,
      },
    ]);
  }

  return (
    <div
      className="card"
      style={{ width: "40rem", position: "relative", left: "30px" }}
    >
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          About : {about}
        </h6>
        <p className="card-text">Cost💰 : {cost}</p>

        <span>
          <button
            onClick={() => {
              if (qty > 1) {
                setqty(() => qty - 1);
                handleBill(totalPrice);
              }
              handleBill(totalPrice);
            }}
          >
            -
          </button>
          <p>Quantity:{qty}</p>
          <button
            onClick={() => {
              if (qty < 3) {
                setqty(() => qty + 1);
                handleBill((qty + 1) * cost);
              }
            }}
          >
            +
          </button>
        </span>

        <h6 className="card-subtitle mb-2 text-body-secondary">
          Total Price💴: {totalPrice}
        </h6>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setCart(() => cart.filter((el) => el.id !== id));
            setBill(() => [
              ...bill.filter((e) => e.id !== id),
              { id: id, totalPrice: 0 },
            ]);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartData;
