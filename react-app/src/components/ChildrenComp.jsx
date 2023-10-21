import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.btn("from child")}>Click me</button>
      </div>
    );
  }
}
