/** Client COUNTER
 * An client wants to know how many times a button was clicked.
 * 
 * The client now comes up with a new requirement, he wants another piece of UI which works very similar to this click Counter, instead of a button a heading which indicates the number of times you hover over it
 * 
 * Now he wants a input element tha counts the number of keys presses for example on key up in an input element he wants to increment a counter value and display it, but we are pratically duplicating code in his requirements, instead of reusing the funcionality, what if 10 different components need a counter funcionality
 * 
 * How can we use reuse this code? in this case we could lift counter logic to Parent component (App.js) and pass as props to its children, ClickCounter and HoverCounter, but imagine a scenario where the counter components are scattered (espalhado) in the react component tree, this approach would't work.
 * 
 * In this scenario the concept of Higher Ordered Components comes into picture
 *  
 */


import React, { Component } from 'react'

class ClickCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        count: 0
    }
    
    this.incrementCount = this.incrementCount.bind(this)

  }

  incrementCount() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }  
    })
  }

     
  render() {
    const { count } = this.state
    return <button onClick={this.incrementCount}>Clicked {count} times</button>
  }
}

export default ClickCounter