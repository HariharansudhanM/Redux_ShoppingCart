import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ProductsList from "./Components/ProductsList";
import ProductsProvider, { ProductsContext } from "../Context/ProductsProvider";
import Cart from "./Components/Cart";

function App() {
  return (
    <ProductsProvider>
      <ProductsList />
      <Cart />
    </ProductsProvider>
  );
}

export default App;
