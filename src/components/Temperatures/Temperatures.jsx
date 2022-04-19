// Dependencies
import React from "react";
// Styles
import styles from "./Temperatures.module.css";
// Components
import Card from "../Card/Card";

const Temperatures = (props) => {
  // Propslardan aldığımız verileri tanımlıyoruz.
  const data = props?.data;
  const temp = props?.temperature;

  return (
    <div className={styles.app}>
      <div className={styles.cards}>
        {data?.map((d) => (
          <Card key={d?.name} name={d?.name} temp={temp} />
        ))}
      </div>
    </div>
  );
};

export default Temperatures;
