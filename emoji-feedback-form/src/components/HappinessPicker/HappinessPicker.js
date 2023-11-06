import React, { Component } from "react";
import "./HappinessPicker.css";

const emojiScores = ["😦", "😞", "😐", "🙂", "😁"];
export default class HappinessPicker extends Component {
  render() {
    const { currentValue, handleScore } = this.props;
    return (
      <div className='happiness-picker-card'>
        {emojiScores.map((emojiScore, index) => (
          <button
            key={index}
            className={index === currentValue ? 'active' : 'inactive'}
            onClick={()=>handleScore(index)}
          >
            {emojiScore}
          </button>
        ))}
      </div> 
    );
  }
}
