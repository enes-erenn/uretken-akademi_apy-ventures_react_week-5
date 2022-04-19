// Dependencies
import React, { useState, useEffect } from "react";

const Card = (props) => {
  // Sıcaklık değerimizi "State" olarak tanımlıyoruz.
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    // Eğer Sıcaklık adı "Celcius" ise
    if (props?.name === "Celcius") {
      setTemp(props?.temp + " °C");

      // Eğer Sıcaklık adı "Fahrenheit" ise
    } else if (props?.name === "Fahrenheit") {
      setTemp((props?.temp * 1.8 + 32).toFixed(1) + " °F");

      // Eğer Sıcaklık adı yukarıdakilerden hiçbiri ise
    } else {
      setTemp(props?.temp + 273.15 + " K");
    }
  }, [props?.temp, props?.name]);

  return (
    <div>
      {props?.name} = {temp}
    </div>
  );
};

export default Card;
