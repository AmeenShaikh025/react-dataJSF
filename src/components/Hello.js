import React, { Component } from "react";

class Hello extends Component {
  state = {
    name: "-"
  };

  showAlert = () => {
    alert(`hi my name is Ameen`);
  };
  selectAmeen = () => {
    this.setState({
      name: "Ameen"
    });
  };
  selectRahul = () => {
    this.setState({
      name: "Rahul"
    });
  };

  render() {
    return (
      <div>
        <h2>Hello from {this.state.name}</h2>

        <button type="button" onClick={this.showAlert}>
          Click
        </button>

        <button type="button" onClick={this.selectAmeen}>
          Ameen
        </button>
        <button type="button" onClick={this.selectRahul}>
          Rahul
        </button>
      </div>
    );
  }
}

export default Hello;
