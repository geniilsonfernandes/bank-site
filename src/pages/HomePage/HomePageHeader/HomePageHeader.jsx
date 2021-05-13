import React from "react";
//img
import coverImg from "../../../img/cover_img.png";
import { ReactComponent as ArrowDown } from "../../../svg/arrow-down.svg";
//css
import styles from "./HomePageHeader.module.css";

const DateInfo = ({number,text}) => {
  return (
    <div className={styles.date_info}>
      <span>{number}</span>
      <p>
        {text}
      </p>
    </div>
  );
};

const HomePageHeader = () => {
  return (
    <header className="mwfit">
      <div className={`${styles.cover} `}>
        <div className={styles.cover__left}>
          <span>Abra sua conta, é só baixar o app!</span>
          <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
          <div className={styles.info}>
            <DateInfo number="3" text="Years of active work"/>
            <DateInfo number="5M" text="Satisfied customers"/>
          </div>
        </div>
        <div className={styles.cover__right}>
          <img
            className={styles.cover__photo}
            src={coverImg}
            alt="A conta digital certa pra cuidar bem do seu dinheiro"
          />
        </div>
        <div className={styles.scroll__action}>
          <ArrowDown /> <span>View more</span>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
