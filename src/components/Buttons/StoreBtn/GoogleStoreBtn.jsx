import React from "react";
import { ReactComponent as GoogleIcon } from "../../../svg/GoogleIcon.svg";
//css
import styles from "./StoreBtn.module.css";
const GoogleStoreBtn = () => {
  return (
    <button className={styles.btn}>
      <GoogleIcon />
      <span>
        <p>Download</p>
        Google Play
      </span>
    </button>
  );
};

export default GoogleStoreBtn;
