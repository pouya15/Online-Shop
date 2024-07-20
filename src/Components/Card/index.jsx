import { useContext } from "react";
import styles from "./index.module.css";
import BasketContext from "../../Contexts/BasketContext";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, category, price }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const handleAddToBasket = (e) => {
    e.stopPropagation();
    setBasket((prev) => {
      return [...prev, { id, title }];
    });
  };

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className={styles.card} onClick={() => handleClick(id)}>
        <img src={image} alt={title} />
        <div className={styles.body}>
          <span>{category}</span>
          <h1>{title}</h1>
          <p>price: {price}$</p>
          {basket.find((item) => item.id === id) ? (
            <button
              className={`${styles.addToBasket} ${styles.added}`}
              onClick={handleAddToBasket}
            >
              Added
            </button>
          ) : (
            <button className={styles.addToBasket} onClick={handleAddToBasket}>
              Add To Basket
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
