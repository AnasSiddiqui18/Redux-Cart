import Data from "../Api/Data.jsx";
import Productcard from "../Components/Productcard.jsx";

// eslint-disable-next-line react/prop-types
const Home = ({ setCartIsEmpty }) => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="home-content">
          {Data.map((item) => (
            <Productcard
              setCartIsEmpty={setCartIsEmpty}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
