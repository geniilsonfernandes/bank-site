import React from "react";
import { ReactComponent as CreditCard } from "../../../svg/CreditCard.svg";
import FeaturesCard from "./FeaturesCard/FeaturesCard";
import styles from "./HomePageFeatures.module.css";
const HomePageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className={`mwfit`}>
        <div className={styles.features__container}>
          <div className={styles.left}>
            <div className={styles.text_feature}>
              <h1>Easy to use</h1>
              <p>
                Attribute-level authorization simplified. Publishing of public APIs,
                end-to-end encryption, easy GDPR. It all comes by default when using
                Homebase + Datahike.
              </p>
              <div className={styles.cta}>
                <button className={styles.btn}>Abra sua conta digital</button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.features__items}>
              <FeaturesCard
                Icon={CreditCard}
                title="Cartão visa internacional"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
              />
              <FeaturesCard
                Icon={CreditCard}
                title="Cartão visa internacional"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
              />
              <FeaturesCard
                Icon={CreditCard}
                title="Cartão visa internacional"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageFeatures;
