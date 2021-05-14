import React from "react";
import styles from "./FeaturesCard.module.css";
const FeaturesCard = ({ Icon, title, text }) => {
  return (
    <div className={styles.features__card}>
      <div className={styles.features__icon}>
        <Icon />
      </div>
      <div className={styles.features__content}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
