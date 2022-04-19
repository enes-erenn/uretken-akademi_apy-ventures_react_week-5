// Dependencies
import React from "react";
// Styles
import styles from "./Hero.module.css";

const Hero = (data) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h4 className={styles.title}>{data?.data} °C</h4>
      </header>
    </div>
  );
};

export default Hero;
