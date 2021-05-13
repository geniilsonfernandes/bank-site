import React from "react";
import Navegation from "../../components/Navegation/Navegation";

//comps
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomePageServices from "./HomePageServices/HomePageServices";
//css
import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <>
      <div className={styles.nav}>
        <Navegation />
      </div>
      <HomePageHeader />
      <section className="mwfit">
        <HomePageServices />
      </section>
    </>
  );
};

export default HomePage;
