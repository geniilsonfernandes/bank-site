import React from "react";
import AppleStoreBtn from "../../../components/Buttons/StoreBtn/AppleStoreBtn";
import GoogleStoreBtn from "../../../components/Buttons/StoreBtn/GoogleStoreBtn";
//css
import styles from "./HomePageCallToAction.module.css";
const HomePageCallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className="mwfit">
        <div className={styles.cta__text}>
          <h2>Domine o seu dinheiro com uma conta 100% digital e do seu geito</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.{" "}
          </p>
        </div>
        <div className={styles.cta__btn}>
          <AppleStoreBtn /> <GoogleStoreBtn />
        </div>
      </div>
    </section>
  );
};

export default HomePageCallToAction;
