import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        <Heading size={4} textColor="black">
          The button has been clicked {this.state.count} times
        </Heading>
      {this.state.count < 5 ?
        <div>
          <p>{this.state.count * 10}</p>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div> :
          <p>{this.state.count}</p>
        }
      </div>
    );
  }
}
