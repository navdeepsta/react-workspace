import React, { Component } from 'react'
import './TeamScore.css'
export default class TeamScore  extends Component {
  state = {runs: 10, wickets: 0, teamName: this.props.teamName}

  increment = (count) => {
    this.setState({runs: this.state.runs + count})
  }

  getWicket = () => {
    this.setState({wickets: this.state.wickets + 1})
  }

  changeTeamName = () => {
    const teamName = prompt("Enter teamname")
    this.setState({teamName: teamName})
  }

  render() {
    console.log(this.state.teamName);
    return (
      <div className="team-card">
        <h1 className="team-name">{this.state.teamName}</h1><span><button onClick={this.changeTeamName}>Change Team</button></span>
        <h1>Runs : {this.state.runs}</h1>
        <h1>Wickets : {this.state.wickets}</h1>

        {this.state.wickets !== 10 ? <div>
            <button onClick={() => this.increment(1)}>1 Run</button>
            <button onClick={() => this.increment(4)}>4 Run</button>
            <button onClick={() => this.increment(6)}>6 Run</button>
            <button onClick={this.getWicket}>Wicket</button>
        </div> : "All Out"}
      </div>
    )
  }
}
