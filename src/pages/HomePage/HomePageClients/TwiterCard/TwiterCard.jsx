import React from "react";
import { ReactComponent as TwiterIcon } from "../../../../svg/TwiterIcon.svg";
import styles from "./TwiterCard.module.css";
const TwiterCard = () => {
  return (
    <div className={styles.twiterCard}>
      <div className={styles.twite__head}>
        <span className={styles.twite__user}> @austin</span>
        <TwiterIcon />
      </div>
      <div className={styles.twite__text}>
        <p>
          Thanks @Bak! Beautiful packaging and the tbm card is beautiful! Much love
          for this bank #Bak
        </p>
      </div>
    </div>
  );
};

export default TwiterCard;
