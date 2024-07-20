import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);
  return (
    <div className={styles.product}>
      <img src={product.image} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <span>Price: {product.price}</span>
    </div>
  );
};

export default ProductPage;
