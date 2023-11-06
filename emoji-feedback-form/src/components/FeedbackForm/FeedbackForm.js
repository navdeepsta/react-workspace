import React, { Component } from "react";
import HappinessPicker from "../HappinessPicker/HappinessPicker";

const initialCurrentValue = 4;
export default class FeedbackForm extends Component {
  state = {
    foodCurrentValue: initialCurrentValue,
    serviceCurrentValue: initialCurrentValue,
    moneyCurrentValue: initialCurrentValue,
    totalScore: 12,
  };

  handleScore = (value, type) => {
    this.setState({
      totalScore: this.state.totalScore - this.state[type] + value,
      [type]: value,
    });
  }

  render() {
    return (
      <div className="feedback-form-card">
        <h1>Let us know how we did!</h1>
        <h3>Food</h3>
        <HappinessPicker
          currentValue={this.state.foodCurrentValue}
          handleScore={(value)=>this.handleScore(value, 'foodCurrentValue')}
        />
        <h3>Service</h3>
        <HappinessPicker
          currentValue={this.state.serviceCurrentValue}
          handleScore={(value)=>this.handleScore(value, 'serviceCurrentValue')}
        />
        <h3>Value for money</h3>
        <HappinessPicker
          currentValue={this.state.moneyCurrentValue}
          handleScore={(value)=>this.handleScore(value, 'moneyCurrentValue')}
        />
        <h2>Total Score: {this.state.totalScore}/12 </h2>
      </div>
    );
  }
}
