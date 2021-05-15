import React from "react";
import CardService from "./CardService/CardService";
//css
import styles from "./HomePageServices.module.css";

import { ReactComponent as CardIcon } from "../../../svg/services/card.svg";
import { ReactComponent as MoedaIcon } from "../../../svg/services/dolar.svg";
import { ReactComponent as PorcentIcon } from "../../../svg/services/fee.svg";

const HomePageServices = () => {
  return (
    <section className={styles.service}>
      <div className="mwfit">
        <div className={styles.service__head}>
          Solve your life straight through the app!
        </div>
        <div className={styles.service__grid}>
          <CardService
            title="No annual fee"
            text="Digital account with credit card without annual fee and without complications"
            Icon={CardIcon}
          />
          <CardService
            title="No service fees"
            text="
            Free transfers, deposit slips and other services"
            Icon={PorcentIcon}
          />
          <CardService
            title="
            More investments"
            text="Earn more than savings and redeem whenever you want"
            Icon={MoedaIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
