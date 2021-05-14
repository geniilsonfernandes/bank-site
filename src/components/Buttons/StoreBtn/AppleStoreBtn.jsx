import React from "react";
import { ReactComponent as AppleIcon } from "../../../svg/AppleIcon.svg";
//css
import styles from "./StoreBtn.module.css";
const AppleStoreBtn = () => {
  return (
    <button className={styles.btn}>
      <AppleIcon />
      <span>
        <p>Download</p>
        Apple Store
      </span>
    </button>
  );
};

export default AppleStoreBtn;
