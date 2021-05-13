import React from "react";
//css
import styles from "./Navegation.module.css";
import { ReactComponent as Logo } from "../../svg/logo.svg";
const Navegation = () => {
  return (
    <nav className={`${styles.nav} mwfit`}>
      <div className={styles.logo}>
        {" "}
        <Logo />{" "}
      </div>

      <div className={styles.nav__links}>
        <ul>
          <li>
            <a href="/"> Produtos Neon</a>
          </li>
          <li>
            <a href="/"> Conta digital PJ</a>
          </li>
          <li>
            <a href="/"> Quem somos</a>
          </li>
          <li>
            <a href="/"> Ajuda</a>
          </li>
        </ul>
      </div>
      <div className={styles.cta}>
        <button className={styles.btn}>Abra sua conta digital</button>
      </div>
    </nav>
  );
};

export default Navegation;
