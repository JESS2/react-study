import React, { Component, Fragment } from 'react';

class Counter extends Component {
  // 동적인 데이터를 다룰 땐 state를 사용한다
  state = {
    number: 0
  }
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }
  render() {
    return (
      <Fragment>
        <br/><hr/><br/>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </Fragment>
    );
  }
}

export default Counter;