// Dependencies
import { useState } from "react";
// Styles
import styles from "./App.module.css";
// Components
import Hero from "./components/Hero/Hero";
import Temperatures from "./components/Temperatures/Temperatures";
// Data
import data from "./api/data.json";

function App() {
  // Import ettiğimiz JSON veriyi "State" olarak tanımlıyoruz.
  const [deg, setDeg] = useState(data?.currentDeg);

  return (
    <div className={styles.app}>
      <Hero data={deg} />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setDeg(deg + 1)}>
          Sıcaklığı Artır
        </button>
        <button className={styles.button} onClick={() => setDeg(deg - 1)}>
          Sıcaklığı Düşür
        </button>
      </div>
      <Temperatures data={data?.temperatures} temperature={deg} />
    </div>
  );
}

export default App;
