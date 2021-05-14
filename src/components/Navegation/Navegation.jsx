import React from "react";
//css
import styles from "./Navegation.module.css";
import { ReactComponent as Logo } from "../../svg/logo.svg";

//

const Navegation = () => {
  const menuLinks = [
    {
      id: 1,
      link: "/",
      linkName: "Produtos Neon",
    },
    {
      id: 2,
      link: "/",
      linkName: "Conta digital PJ",
    },
    {
      id: 3,
      link: "/",
      linkName: "Quem somos",
    },
    {
      id: 4,
      link: "/",
      linkName: "Ajuda",
    },
  ];

  return (
    <nav className={`${styles.nav} mwfit`}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.nav__links}>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}> {link.linkName}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cta}>
        <button className={styles.btn}>Abra sua conta digital</button>
      </div>
    </nav>
  );
};

export default Navegation;
