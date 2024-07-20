import BasketContext from "../../Contexts/BasketContext";
import Card from "../Card";
import Header from "../Header";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <Header />
        <section className={styles.container}>
          {products.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </section>
      </BasketContext.Provider>
    </>
  );
};

export default HomePage;
