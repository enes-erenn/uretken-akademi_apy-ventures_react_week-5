// Styles
import styles from "./App.module.css";
// Components
import Hero from "./components/Hero/Hero";
// Data
import data from "./api/data.json";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      temp: data?.currentDeg,
    };
  }

  // Sıcaklığı artırma fonksiyonu
  IncrementItem = () => {
    this.setState({ temp: this.state.temp + 1 });
    console.log(this.state.temp);
  };
  // Sıcaklığı düşürme fonksiyonu
  DecreaseItem = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  render() {
    return (
      <div className={styles.app}>
        <Hero data={this.state.temp} />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={this.IncrementItem}>
            Sıcaklığı Artır
          </button>
          <button className={styles.button} onClick={this.DecreaseItem}>
            Sıcaklığı Düşür
          </button>
        </div>
        <div className={styles.cards}>
          <p>Celcius = {this.state.temp + " °C"}</p>
          <p>Fahrenheit = {(this.state.temp * 1.8 + 32).toFixed(1) + " °F"}</p>
          <p>Kelvin = {this.state.temp + 273.15 + " K"}</p>
        </div>
      </div>
    );
  }
}

export default App;
