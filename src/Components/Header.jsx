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
    0
  );

  return (
    <div className="header-Section">
      <div className="container">
        <div className="header-content">
          <h1>Redux</h1>

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
