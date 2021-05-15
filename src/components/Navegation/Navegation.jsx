import React from "react";
//css
import styles from "./Navegation.module.css";
import { ReactComponent as Logo } from "../../svg/logo.svg";
import ButtonCta from "../Buttons/ButtonCta/ButtonCta";

//

const Navegation = () => {
  const menuLinks = [
    {
      id: 1,
      link: "/",
      linkName: "Products",
    },
    {
      id: 2,
      link: "/",
      linkName: "For Freelancer",
    },
    {
      id: 3,
      link: "/",
      linkName: "Payment",
    },
    {
      id: 4,
      link: "/",
      linkName: "Help",
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
            <ButtonCta text="Open Your Account"/>
      </div>
    </nav>
  );
};

export default Navegation;
