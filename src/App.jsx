import { useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
const App = () => {
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  return (
    <>
      <Header />
      <Home setCartIsEmpty={setCartIsEmpty} />
      <Cart cartIsEmpty={cartIsEmpty} />
    </>
  );
};

export default App;
