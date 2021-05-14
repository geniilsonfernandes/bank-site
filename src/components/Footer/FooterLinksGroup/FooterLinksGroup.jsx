import React from "react";

import styles from "./FooterLinksGroup.module.css";
const FooterLinksGroup = ({ title, links }) => {
  return (
    <div className={styles.links__group}>
      <h2>{title}</h2>
      <ul className={styles.link__group_list}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.link}> {link.linkName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksGroup;
