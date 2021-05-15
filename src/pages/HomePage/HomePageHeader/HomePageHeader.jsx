import React from "react";
//img
import coverImg from "../../../img/cover_img.png";
//css
import styles from "./HomePageHeader.module.css";

const DateInfo = ({ number, text }) => {
  return (
    <div className={styles.date_info}>
      <span>{number}</span>
      <p>{text}</p>
    </div>
  );
};

const HomePageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.cover} mwfit `}>
        <div className={styles.cover__left}>
          <span>Open your account, just download the app!!</span>
          <h1> The right digital account to take good care of your money</h1>
          <div className={styles.info}>
            <DateInfo number="3" text="Years of active work" />
            <DateInfo number="5M" text="Satisfied customers" />
          </div>
        </div>
        <div className={styles.cover__right}>
          <img
            className={styles.cover__photo}
            src={coverImg}
            alt="A conta digital certa pra cuidar bem do seu dinheiro"
          />
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
