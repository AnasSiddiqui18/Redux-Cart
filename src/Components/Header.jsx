import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { toggleCart } from "../Store/Slices/Cartslices";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const handleCart = (open) => {
    dispatch(toggleCart(open));
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0 //? this is the initial value of the total
  );

  //? How the reducer function is working ?//

  //* First of all the value of the total is 0 right and when we add any item so initially the quantity of the item is 1 so reducer function adds the value of the total with the value of the quantity right so 0 + 1 = 1 so now the quantity is 1

  return (
    <div className="header-Section">
      <div className="container">
        <div className="header-content">
          <h1>Chcking</h1>

          {/* Display the total quantity */}
          <h5 className="cart-number" onClick={() => handleCart(true)}>
            {totalQuantity}
          </h5>

          {/* Clicking on the cart icon opens the cart */}
          <HiShoppingCart
            className="cart-icon"
            onClick={() => {
              handleCart(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
