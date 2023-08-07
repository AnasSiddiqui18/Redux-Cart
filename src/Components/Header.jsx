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

  return (
    <div className="header-Section">
      <div className="container">
        <div className="header-content">
          <h1>Redux</h1>

          {cartItems.map((value) => {
            return (
              <h5 className="cart-number" onClick={() => handleCart(true)}>
                {value.quantity}
              </h5>
            );
          })}

          <HiShoppingCart
            className="cart-icon"
            onClick={() => {
              handleCart(true);
            }}
          />

          {/* Map through the cartItems array */}
        </div>
      </div>
    </div>
  );
};

export default Header;
