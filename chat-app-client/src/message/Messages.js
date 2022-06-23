import React, { Component } from "react";
import { Main_Message } from "./Main_Message";

export class Messages extends Component {
  render() {
    let msg_list = 'No messages!'

    if (this.props.channel.messages) {
      const { msgs } = this.props
      list = msgs.channel.messages.map(msg => )
    }
  }
}