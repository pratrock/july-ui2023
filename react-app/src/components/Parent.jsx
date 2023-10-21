import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

    this.parentBtn = this.parentBtn.bind(this);
  }

  parentBtn(txt) {
    alert("This is a text from " + this.parentName + " and " + txt);
  }
  render() {
    return (
      <div>
        Click the button
        <ChildrenComp btn={this.parentBtn} />
      </div>
    );
  }
}
