import React, { Component } from "react";

export class Main_Message extends Component {
  render() {
    return (
      <div>
        <p>{this.props.senderName}</p>
        <span>{this.props.text}</span>
      </div>
    )
  }
}