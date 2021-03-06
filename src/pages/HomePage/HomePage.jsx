import React from "react";
import Navegation from "../../components/Navegation/Navegation";

//comps
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomePageServices from "./HomePageServices/HomePageServices";
//css
import styles from "./HomePage.module.css";
import HomePageCallToAction from "./HomePageCallToAction/HomePageCallToAction";
import HomePageFeatures from "./HomePageFeatures/HomePageFeatures";
import HomePagetesTimonial from "./HomePageClients/HomePageTestimonial";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className={styles.nav}>
        <Navegation />
      </div>
      <HomePageHeader />
      <HomePageServices />
      <HomePageCallToAction />
      <HomePageFeatures />
      <HomePagetesTimonial />
      <Footer />
    </>
  );
};

export default HomePage;
