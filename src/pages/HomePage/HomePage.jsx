import React from "react";

//img
import coverImg from "../../img/cover_img.png";

import { ReactComponent as ArrowDown } from "../../svg/arrow-down.svg";
//css
import styles from "./HomePage.module.css";
import HomePageServices from "./HomePageServices/HomePageServices";
const HomePage = () => {
  return (
    <>
      <header className="mwfit">
        <div className={`${styles.cover} `}>
          <div className={styles.cover__left}>
            <span>Abra sua conta, é só baixar o app!</span>
            <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
          </div>
          <div className={styles.cover__right}>
            <img className={styles.cover__photo}
              src={coverImg}
              alt="A conta digital certa pra cuidar bem do seu dinheiro"
            />
          </div>
          <div className={styles.scroll__action}>
            <ArrowDown /> <span>View more</span>
          </div>
        </div>
      </header>
      <section className="mwfit">
        <HomePageServices />
      </section>
    </>
  );
};

export default HomePage;
