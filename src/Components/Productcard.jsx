import { useDispatch } from "react-redux";
import { addItem } from "../Store/Slices/Cartslices";

const Productcard = ({ item, setCartIsEmpty }) => {
  console.log(item);

  const controlImgDrag = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const handleToCart = (item) => {
    dispatch(addItem(item));
    setCartIsEmpty(false);
  };

  return (
    <div className="productcard">
      <div className="product-img">
        <img
          className="pro-image"
          onDragStart={(e) => controlImgDrag(e)}
          src={item.img}
          alt="image not found"
        />
      </div>
      <span className="pro-rating"> {item.rating}</span>
      <h4 className="pro-title">{item.title}</h4>
      <h3 className="pro-price">$ {item.price}</h3>
      <button className="add-btn" onClick={() => handleToCart(item)}>
        Add to cart
      </button>
    </div>
  );
};

export default Productcard;
