// src/components/ClickityClick.js
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      toggled: false,
      count: 0
    };
  }
 
  // handleClick = () => {
  //   this.setState( previousState => {
  //     return {
  //       toggled: !previousState.toggled }, 
  //     () => console.log(this.state.hasBeenClicked)}) // prints true
  // }

  handleClick = () => {
    this.setState(previousState => {
      return { 
        toggled: !previousState.toggled}},
       () => console.log(this.state.toggled)
    )
  }

 
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }

}
 
export default ClickityClick;
 
