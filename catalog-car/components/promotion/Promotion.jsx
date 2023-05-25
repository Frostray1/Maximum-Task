import React from "react";
import styles from "./Promotion.module.scss";
import Button from "../button/Button";

const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <div className={styles.container}>
        <h1>Кредит на новый Cherry Tiggo</h1>
        <div className={styles.promotionInfo}>
          <p>
            Оформите кредит на любой автомобиль ассортимента дилерского центра
            «Максимум»
          </p>
          <Button text={"Оформить"} />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
