import React from "react";
import { ReactComponent as Arrow } from "../../../../svg/arrow-top.svg";
//css
import styles from "./CardService.module.css";
const CardService = ({Icon,title,text}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}> <Icon /> </div>
      <div className={styles.card__info}>
        <h2>{title}</h2>
        <div className={styles.card__text}>
          <p>{text}</p>
          <span>
            <Arrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardService;
