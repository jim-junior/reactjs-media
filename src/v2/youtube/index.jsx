import React, { Component } from 'react';
import { generateUnideId, InsertSDK } from './utils';

class YtPlayer extends Component {
  constructor(props) {
    const playerId = generateUnideId()
    this.state = {
      playerId
    }
  }

  componentDidMount() {
    InsertSDK()

  }

  render() {
    return (
      <div id={this.state.playerId}  ></div>
    )
  }
}

export default YtPlayer;
