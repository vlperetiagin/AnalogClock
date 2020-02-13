import React from "react";
import "./styles.css";
import Header from "./Header";

export default class Watches extends React.Component {
  state = {
    hours: "",
    minutes: "",
    seconds: ""
  };
  updateInterval = "";

  handleTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  };

  componentDidMount() {
    this.updateInterval = setInterval(this.handleTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }
  render() {
    return (
      <div>
        <Header title="Sooo... its ur analog clock. Enjoy" />
        <div className="WholeClock">
          <div
            className="HourArrow"
            style={{ transform: `rotate(${this.state.hours * 30}deg)` }}
          />
          <div
            className="MinuteArrow"
            style={{ transform: `rotate(${this.state.minutes * 6}deg)` }}
          />
          <div
            className="SecondsArrow"
            style={{ transform: `rotate(${this.state.seconds * 6}deg)` }}
          />
        </div>
      </div>
    );
  }
}
