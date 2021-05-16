import React from "react";
import ButtonCta from "../../../components/Buttons/ButtonCta/ButtonCta";

import { ReactComponent as Dolar } from "../../../svg/features/dolar.svg";
import { ReactComponent as Zero } from "../../../svg/features/zero.svg";
import { ReactComponent as Card } from "../../../svg/features/card.svg";

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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
              <div className={styles.cta}>
                <ButtonCta text="Open Your Account" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.features__items}>
              <FeaturesCard
                Icon={Card}
                title="
                International Visa Card"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
              />
              <FeaturesCard
                Icon={Zero}
                title="Zero monthly fee and annual fee"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
              />
              <FeaturesCard
                Icon={Dolar}
                last={true}
                title="Investment that yields more than savings"
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
