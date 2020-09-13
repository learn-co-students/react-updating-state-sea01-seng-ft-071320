import React, { Component } from "react";

class LightSwitch extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
  };
}

export default LightSwitch;
