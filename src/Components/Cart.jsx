import React, { useContext, useState } from "react";
// import { ProductsContext } from "../../Context/ProductsProvider";
import CartData from "./CartData";
import { useSelector } from "react-redux";

function Cart() {
  //////////////Context
  // const { cart, setCart, bill } = useContext(ProductsContext);

  /////////////Redux
  const { cart } = useSelector((state) => state.application);
  const { bill } = useSelector((state) => state.billApp);

  // const [quantity, setQauntity] = useState(1);

  // function addQuantity() {
  //   if (quantity < 3) {
  //     setQauntity(quantity + 1);
  //   }
  // }
  // function subtractQuantity() {
  //   if (quantity > 1) {
  //     setQauntity(quantity - 1);
  //   }
  // }

  const total = bill
    .map((e) => {
      return e.totalPrice;
    })
    .reduce((acc, i) => acc + i);

  console.log(total);

  return (
    // <div classNameNameNameName="container">
    //   <div classNameNameNameName="row">
    //     <div classNameNameNameName="col">
    //       <h3>{cart[0]?.title}</h3>
    //       <p>{cart[0]?.description}</p>
    //       {cart.length > 0 && <p>Quantity = {quantity}</p>}
    //     </div>
    //     <div classNameNameNameName="col">
    //       {cart.length > 0 && <button onClick={subtractQuantity}>-</button>}
    //       <h3>{cart[0]?.price}</h3>
    //       {cart.length > 0 && <button onClick={addQuantity}>+</button>}
    //     </div>
    //     {cart.length > 0 && <h1>total : {cart[0]?.price * quantity}</h1>}
    //     {cart.length > 0 && (
    //       <button onClick={removeProduct}>Remove from the cart</button>
    //     )}
    //   </div>
    // </div>

    <>
      <h2 style={{ textAlign: "center" }}>
        <strong>Your Cart</strong>
      </h2>
      {cart.map((el, index) => {
        return (
          <CartData
            item={el.item}
            about={el.about}
            quantity={el.quantity}
            cost={el.cost}
            key={index}
            id={el.id}
            make={el.make}
          />
        );
      })}

      {total > 0 && (
        <div className="card">
          <div className="card-header">Total Cart price</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Rupees💰 : {total}</p>
            </blockquote>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
