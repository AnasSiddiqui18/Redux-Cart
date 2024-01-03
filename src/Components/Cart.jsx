import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  incrementItem,
  decrementItem,
  emptyCart,
} from "../Store/Slices/Cartslices";
import { useEffect } from "react";

const Cart = () => {
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
  }, [isCartOpen]); // Added dependency to useEffect

  const incrementCount = (itemIndex, itemId) => {
    dispatch(incrementItem({ itemIndex, itemId }));
  };

  const decrementCount = (itemIndex, itemId) => {
    dispatch(decrementItem({ itemIndex, itemId }));
  };

  const clearCart = () => {
    dispatch(emptyCart());
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {isCartOpen && (
        <div className="overlay" onClick={() => handleCart(false)}></div>
      )}

      {isCartOpen && (
        <div className={"cart"}>
          <div className="cart-top">
            {cartItems.length > 0 ? (
              <div className="cart-top-text">Cart ({totalQuantity})</div>
            ) : (
              <div className="cart-top-text">Cart (0)</div>
            )}

            <div className="cross">
              <RxCross2 onClick={() => handleCart(false)} />
            </div>
          </div>
          {cartItems.length < 1 && (
            <div className="empty-content">
              <img src="/images/cart.png" alt="no-img" />
              <p className="cart-para">Cart is empty!</p>
            </div>
          )}

          {cartItems.length >= 1 && (
            <a href="#" className="empty-btn" onClick={clearCart}>
              Empty Cart
            </a>
          )}

          <div className="cart-content">
            {cartItems.map((item, index) => (
              <div className="box" key={item.id}>
                <div className="cart-img">
                  <img src={item.img} alt="" />
                </div>

                <div className="cart-details">
                  <p>{item.title}</p>
                  <h4 className="cart-price">${item.price}</h4>
                  {item.quantity > 1 ? (
                    <p className="cart-total-price">
                      Total: ${item.totalPrice}
                    </p>
                  ) : (
                    <p className="cart-total-price">Total: ${item.price}</p>
                  )}
                </div>

                <div className="cart-btn">
                  <button
                    onClick={() => incrementCount(index, item.id)}
                    className="increment"
                  >
                    +
                  </button>
                  <h2>{item.quantity}</h2>
                  <button
                    onClick={() => decrementCount(index, item.id)}
                    className="decrement"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length >= 1 && (
            <div className="cart-footer">
              <a
                href="#"
                className="checkout-text"
                onClick={() => handleCart(false)}
              >
                Checkout
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
