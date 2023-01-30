/** Client Hover */

import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

  render() {

    //const { count } = this.state
    // or this way
    return  <h2 className="hover"  onMouseOver={this.props.incrementCount}>
            {this.props.name} Hover {this.props.count} times
        </h2>
  }
}

export default UpdatedComponent(HoverCounter)