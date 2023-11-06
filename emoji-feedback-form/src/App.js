import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <FeedbackForm />
    </div>
    )
  }
}
