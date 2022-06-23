import React, { Component } from 'react'

export class Channels extends Component {
  render() {
    let channel_list = `Sorry, No channels available`
    if (this.props.channel_list) {
      let list = this.props.all_channels.map(c => <p>{c.name}</p>)
    }
    return (
      <div>
        {channel_list}
      </div>
    )
  }
}