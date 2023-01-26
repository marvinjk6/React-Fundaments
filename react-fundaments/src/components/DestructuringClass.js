

/***** Destructuring props and state - Class Component *****/

import React, { Component } from 'react'

export default class DestructuringClass extends Component {

  render() {

    const {name, ninjaLevel} = this.props
    //const {state1, state2} = this.state

    return (
      <div>
        <h1>{name}</h1>
        <h4>{ninjaLevel}</h4>
      </div>
    )
  }
}

