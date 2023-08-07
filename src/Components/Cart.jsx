import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  incrementItem,
  decrementItem,
  emptyCart,
} from "../Store/Slices/Cartslices";
import { useEffect } from "react";

const Cart = ({ cartIsEmpty }) => {
  //? this prop is pass when the addtocart button click check the productcart.jsx
  const dispatch = useDispatch();
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const handleCart = (close) => {
    dispatch(toggleCart(close));
  };

  useEffect(() => {
    if (isCartOpen === true) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }
  });

  const incrementCount = (itemIndex, itemId) => {
    dispatch(incrementItem({ itemIndex, itemId }));
  };

  const decrementCount = (itemIndex, itemId) => {
    dispatch(decrementItem({ itemIndex, itemId }));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      {isCartOpen && (
        <div className="overlay" onClick={() => handleCart(false)}></div>
      )}
      <div className={`cart ${isCartOpen ? "show" : ""}`}>
        <div className="cart-top">
          {cartItems.length > 0 ? (
            cartItems.map((value) => (
              <div key={value.id} className="cart-top-text">
                Cart ({value.quantity})
              </div>
            ))
          ) : (
            <div className="cart-top-text">Cart (0)</div>
          )}

          <div className="cross">
            <RxCross2 onClick={() => handleCart(false)} />
          </div>
        </div>
        {cartIsEmpty === true && <p className="cart-para">Cart is empty!</p>}

        {cartIsEmpty === false && (
          <a href="#" className="empty-btn" onClick={clearCart}>
            Empty Cart
          </a>
        )}

        <div className="cart-content">
          {cartItems.map((value, index) => (
            <div className="box" key={value.id}>
              <div className="cart-img">
                <img src={value.img} alt="" />
              </div>

              <div className="cart-details">
                <p>{value.title}</p>
                <h4 className="cart-price">${value.price}</h4>
              </div>

              <div className="cart-btn">
                <button
                  onClick={() => incrementCount(index, value.id)}
                  className="increment"
                >
                  +
                </button>
                <h2>{value.quantity}</h2>
                <button
                  onClick={() => decrementCount(index, value.id)}
                  className="decrement"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;