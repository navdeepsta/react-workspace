import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import React, { Component } from 'react'

export default class App extends Component {
  state = {Scoreboards : [<Scoreboard />]};

  addScoreboard = () => {
    this.setState({Scoreboards : [...this.state.Scoreboards, <Scoreboard />]})
  }

  render() {
    return (
      <div className="app">
      {this.state.Scoreboards}
      <button className="add-scoreboard" onClick={this.addScoreboard}>Add Scoreboard</button>
    </div>
    )
  }
}
