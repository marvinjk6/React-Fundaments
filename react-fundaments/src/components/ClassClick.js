
import React, { Component } from 'react'

export default class ClassClick extends Component {

  clickHandler() {
    console.log('Class componet click')
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
