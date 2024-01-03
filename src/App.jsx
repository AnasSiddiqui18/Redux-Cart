import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
const App = () => {
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const body = document.body;

    const onDragStart = (e) => {
      handleDragStart(e);
    };

    body.addEventListener("click", onDragStart);
  }, []);

  return (
    <>
      <Header />
      <Home setCartIsEmpty={setCartIsEmpty} />
      <Cart cartIsEmpty={cartIsEmpty} />
    </>
  );
};

export default App;
