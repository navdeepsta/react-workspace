import { Component } from 'react';

export default class Button extends Component {
  render() {
    const { name } = this.props;
    return <button onClick={this.props.onClick}>{name}</button>;
  }
}
