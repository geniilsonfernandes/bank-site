import React from "react";
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

const Footer = () => {
  const products = {
    title: "Produtos Neon",
    links: [
      { id: 1, linkName: "Cartão de crédito", link: "/" },
      { id: 2, linkName: "Cartão pré-pago", link: "/" },
      { id: 3, linkName: "Investimentos", link: "/" },
      { id: 4, linkName: "Neon Mais", link: "/" },
      { id: 5, linkName: "Empréstimo", link: "/" },
    ],
  };
  const blog = {
    title: "Blog",
    links: [
      { id: 1, linkName: "#focanodinheiro", link: "/" },
      { id: 2, linkName: "O poder da comunidade", link: "/" },
      { id: 3, linkName: "Investimentos", link: "/" },
      { id: 4, linkName: "Desafio das 52 semanas", link: "/" },
      { id: 5, linkName: "Planilha de gastos", link: "/" },
    ],
  };
  const institucional = {
    title: "Institucional",
    links: [
      { id: 1, linkName: "Ouvidoria", link: "/" },
      { id: 2, linkName: "Fale conosco", link: "/" },
    ],
  };
  const ajuda = {
    title: "Ajuda",
    links: [
      { id: 1, linkName: "Ouvidoria", link: "/" },
      { id: 2, linkName: "Fale conosco", link: "/" },
    ],
  };

  return (
    <footer className="mwfit">
      <div className={styles.footer__head}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <button className={styles.toggleBtn}>
          Night <span> </span>
        </button>

        <div className={styles.footer__social}>
          <span>Acompanhe nas redes</span>
          <div className={styles.social__icons}>
            <ul>
              <li>
                <a href="/">
                  <LinkIndIcon />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <TwiterIcon />{" "}
                </a>
              </li>
              <li>
                <a href="/">
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
            contact="oi@neon.com.br (24 horas)"
            title="Atendimento"
          />
          <ContactBtn Icon={Help} contact="imprensa@neon.com.br" title="Imprensa" />
        </div>
      </div>
      <span className={styles.divisor}></span>
      <div className={styles.helper}>
        <span>
          <Smile />
        </span>
        <p>
          Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente
          também. Por isso o time Neon está sempre trabalhando para fazer a conta digital
          perfeita para você.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
