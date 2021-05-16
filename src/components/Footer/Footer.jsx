import React, { useContext } from "react";
//css
import styles from "./Footer.module.css";
import { ReactComponent as LinkIndIcon } from "../../svg/LinkIndIcon.svg";
import { ReactComponent as InstagramIcon } from "../../svg/InstagramIcon.svg";
import { ReactComponent as TwiterIcon } from "../../svg/twiterIcon-2.svg";
import { ReactComponent as FacebookIcon } from "../../svg/FacebookIcon.svg";

import { ReactComponent as Contact } from "../../svg/help.svg";
import { ReactComponent as Help } from "../../svg/contact.svg";
import { ReactComponent as Smile } from "../../svg/smile.svg";

import { ReactComponent as Logo } from "../../svg/logo.svg";
import FooterLinksGroup from "./FooterLinksGroup/FooterLinksGroup";
import ContactBtn from "../Buttons/ContactBtn/ContactBtn";
import { ThemeContext } from "../Theme/ThemeContext";

const Footer = () => {
  const products = {
    title: "Bak Products",
    links: [
      { id: 1, linkName: "Credit card", link: "/" },
      { id: 2, linkName: "Prepaid card", link: "/" },
      { id: 3, linkName: "Investments", link: "/" },
      { id: 4, linkName: "Bak More", link: "/" },
      { id: 5, linkName: "Loan", link: "/" },
    ],
  };
  const blog = {
    title: "Resources",
    links: [
      { id: 1, linkName: "#yourmoney", link: "/" },
      { id: 2, linkName: "The power of the community", link: "/" },
      { id: 3, linkName: "Investments", link: "/" },
      { id: 4, linkName: "52 week challenge", link: "/" },
      { id: 5, linkName: "Spend spreadsheet", link: "/" },
    ],
  };
  const institucional = {
    title: "Company",
    links: [
      { id: 1, linkName: "Careers", link: "/" },
      { id: 2, linkName: "Documentation", link: "/" },
    ],
  };
  const ajuda = {
    title: "Help",
    links: [
      { id: 1, linkName: "About", link: "/" },
      { id: 2, linkName: "Contact us", link: "/" },
    ],
  };

  const { toggleTheme,theme  } = useContext(ThemeContext);

  return (
    <footer className="mwfit">
      <div className={styles.footer__head}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <button className={styles.toggleBtn} onClick={toggleTheme} data-theme={theme}>
          {theme} <span> </span>
        </button>

        <div className={styles.footer__social}>
          <span>Follow on</span>
          <div className={styles.social__icons}>
            <ul>
              <li>
                <a href="/" className={styles.icon}>
                  <LinkIndIcon />
                </a>
              </li>
              <li>
                <a href="/" className={styles.icon}>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="/" className={styles.icon}>
                  <TwiterIcon />
                </a>
              </li>
              <li>
                <a href="/" className={styles.icon}>
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className={styles.divisor}></span>

      <div className={styles.footer__links}>
        <div className={styles.link__col}>
          <FooterLinksGroup title={products.title} links={products.links} />
        </div>
        <div className={styles.link__col}>
          <FooterLinksGroup title={blog.title} links={blog.links} />
        </div>
        <div className={styles.link__col}>
          <FooterLinksGroup title={institucional.title} links={institucional.links} />
        </div>
        <div className={styles.link__col}>
          <FooterLinksGroup title={ajuda.title} links={ajuda.links} />
        </div>

        <div className={styles.link__col_btn}>
          <ContactBtn
            Icon={Contact}
            contact="hello@bak.com.br (24h)"
            title="Contact us"
          />
          <ContactBtn Icon={Help} contact="back@back.com.br" title="Contact us" />
        </div>
      </div>
      <span className={styles.divisor}></span>
      <div className={styles.helper}>
        <span>
          <Smile />
        </span>
        <p>
          Hey! Have you read this far? You care about the smallest details, really. We
          too. That's why the Neon team is always working to make the perfect digital
          account for you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
