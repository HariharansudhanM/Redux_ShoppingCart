import React from "react";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import ProductsList from "../Components/ProductsList";
import Cart from "../Components/Cart";

function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <section className="container">
        <div className="row">
          <section className="col">
            <ProductsList />
          </section>
          <section className="col">
            <div className="contain">
              {" "}
              <Cart />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;
