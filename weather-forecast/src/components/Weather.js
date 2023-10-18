import React, { Component } from 'react'
import './Weather.css';


export default class Weather extends Component {

  constructor() {
    super();
    this.state = {
        counter : 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({counter: this.state.counter+1})
  }
  
  render() { 
    const {day, conditions, maxTemp, wind, emoji} = this.props.data;
    return (
      <div className="weather-card">{this.state.counter}
        <h2>{day}</h2>  <span className="emoji">{emoji}</span>  {conditions} 
        <p>Max: {maxTemp}&deg;C {maxTemp >= 35 ? <span className="heatwave">Heatwave warning</span> : ""}</p>
        <p>Wind: {wind} km/h {wind >= 30 ? <span className="strong-wind">Strong wind warning</span> : ""}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
