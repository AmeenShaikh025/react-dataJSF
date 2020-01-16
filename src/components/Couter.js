import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDec = () => {
    // if (this.state.count <= 0) {
    //   this.setState({
    //     count: 0
    //   });
    // } else {
    this.setState({
      count: this.state.count - 1
    });
    // }
  };

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.count <= 0) {
    //   return false;
    // }
    console.log("next state", nextState);
    console.log("next props", nextProps);
    //console.log(`next props ${JSON.stringify(nextProps)}`);
    if (nextState.count < 0) {
      return false;
    }
    return true;
  }
  render() {
    const { count } = this.state;
    return (
      <div className="main">
        <button type="button" onClick={this.handleInc}>
          INC
        </button>
        <span>{this.state.count}</span>
        <button type="button" onClick={this.handleDec}>
          DEC
        </button>

        <h2>{count * 4}</h2>

        {/* <h4>
          {() => {
            return this.state.count * 4;
          }}
        </h4> */}
      </div>
    );
  }
}

export default Counter;
