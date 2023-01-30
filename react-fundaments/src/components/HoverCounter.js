/** Client Hover */

import React, { Component } from 'react'

class HoverCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }

    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    this.setState((prevState) => {
        return { count: prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state
    return  <h2 className="hover" onMouseOver={this.incrementCount}>Hover {count} times</h2>
  }
}

export default HoverCounter