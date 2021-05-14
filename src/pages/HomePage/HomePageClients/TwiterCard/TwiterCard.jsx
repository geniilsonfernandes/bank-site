import React from "react";
import { ReactComponent as TwiterIcon } from "../../../../svg/TwiterIcon.svg";
import styles from './TwiterCard.module.css'
const TwiterCard = () => {
  return (
    <div className={styles.twiterCard}>
      <div className={styles.twite__head}>
        <span className={styles.twite__user}> @marciogurka</span>
        <TwiterIcon />
      </div>
      <div className={styles.twite__text}>
        <p>
          Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse
          banco #bancoNeon
        </p>
      </div>
    </div>
  );
};

export default TwiterCard;
