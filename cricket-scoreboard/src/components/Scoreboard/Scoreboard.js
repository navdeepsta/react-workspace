import React, { Component } from 'react'
import TeamScore from '../TeamScore/TeamScore '
import './Scoreboard.css'
export default class Scoreboard extends Component {
  render() {
    return (
      <div className="team-score-card">
        <TeamScore teamName = {"India"}/>
        <TeamScore teamName = {"Australia"}/>
      </div>
    )
  }
}
