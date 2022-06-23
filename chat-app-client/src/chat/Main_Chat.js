import React, { Component } from "react";
import { Channels } from './Channels'

export class Main_Chat extends Component {
  state = {
    all_channels: [
      { id:10, name: 'John', members: 20 }
    ]
  }

  render() {
    return (
      <div>
        <Channels all_channels={this.state.all_channels} />
      </div>
    )
  }
}