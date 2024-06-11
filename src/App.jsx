import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ProductsList from "./Components/ProductsList";
import ProductsProvider, { ProductsContext } from "../Context/ProductsProvider";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  );
}

export default App;
