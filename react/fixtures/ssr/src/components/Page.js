import React, {Component} from 'react';

import './Page.css';

const autofocusedInputs = [
  <input key="0" autoFocus placeholder="Has auto focus" />,
  <input key="1" autoFocus placeholder="Has auto focus" />,
];

export default class Page extends Component {
  state = {active: false};
  handleClick = e => {
    this.setState({active: true});
  };
  render() {
    const link = (
      <a className="bold" onClick={this.handleClick}>
        Click Here
      </a>
    );
    return (
      <div>
        <p suppressHydrationWarning={true}>A random number: {Math.random()}</p>
        <p>Autofocus on page load: {autofocusedInputs}</p>
        <p>{!this.state.active ? link : 'Thanks!'}</p>
        {this.state.active && <p>Autofocus on update: {autofocusedInputs}</p>}
      </div>
    );
  }
}
