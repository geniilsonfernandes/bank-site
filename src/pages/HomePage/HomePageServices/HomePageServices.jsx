import React from "react";
import CardService from "./CardService/CardService";
//css
import styles from "./HomePageServices.module.css";

import { ReactComponent as CardIcon } from "../../../svg/card-icon.svg";
import { ReactComponent as MoedaIcon } from "../../../svg/moeda-icon.svg";
import { ReactComponent as PorcentIcon } from "../../../svg/porcent-icon.svg";

const HomePageServices = () => {
  return (
    <div className={`${styles.service}`}>
      <div className={styles.head}>Resolva sua vida direto pelo app Neon!</div>
      <div className={styles.services__grid}>
        <CardService title='Sem anuidade' text="Conta digital com cartão de crédito sem anuidade e sem complicação" Icon={CardIcon} />
        <CardService title='Sem taxas' text="Transferências, boletos de depósito e outros serviços gratuitos" Icon={MoedaIcon} />
        <CardService title='Mais investimentos' text="Rendem mais que a poupança e você resgata quando quiser" Icon={PorcentIcon} />
      </div>
    </div>
  );
};

export default HomePageServices;
