import React from 'react';

export default class MyComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'count': 0
    };

    this.handleCount = this.handleCount.bind(this);
  }

  handleCount () {
    this.setState({
      'count': this.state.count + 1
    });
  }

  render () {
    return (
      <div>
        <h1>The counter is {this.state.count}</h1>
        <button onClick={this.handleCount}>Click Me!</button>
      </div>
    )
  }
};
