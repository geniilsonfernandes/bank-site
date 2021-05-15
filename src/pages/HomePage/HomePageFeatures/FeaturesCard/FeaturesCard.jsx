import React from "react";
import { useShowItemPage } from "../../../../Hooks/useShowItemPage";
import styles from "./FeaturesCard.module.css";
const FeaturesCard = ({ Icon, title, text, last }) => {
  const { itemRef, showItem } = useShowItemPage()


  return (
    <div ref={itemRef} className={styles.features__card} data-line={ !last && showItem} data-line-show={!last} >
      <div className={styles.features__icon} data-icon={showItem} >
        <Icon />
      </div>
      <div className={styles.features__content}>
        <h2>{title}</h2>
        <p>{text} </p>
        
      </div>
    </div>
  );
};

export default FeaturesCard;
