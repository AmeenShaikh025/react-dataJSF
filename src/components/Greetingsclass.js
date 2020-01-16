import React, { Component } from "react";

class GreetingsClass extends Component {
  render() {
    const { item, no } = this.props;
    return (
      <div>
        <h5>Hello from {item}</h5>
      </div>
    );
  }
}

export default GreetingsClass;
