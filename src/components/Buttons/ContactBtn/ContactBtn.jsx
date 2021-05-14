import React from "react";

import styles from './ContactBtn.module.css'
const ContactBtn = ({Icon,contact,title}) => {
  return (
    <button className={styles.btn}>
      <Icon />
      <span>
        <p>{title}:</p>
        {contact}
      </span>
    </button>
  );
};

export default ContactBtn;
