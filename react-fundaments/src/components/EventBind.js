
// snippet rce to create Class Component

/** when we need to change a state
 * the keyword this is undefined in a event handler, and that is the reason event binding is necessary in react class component
 * there are many of ways to bind event handlers in react in blogs, videos, etc
 * lets learn all of the ways
 * 1º use the bind keyword in render method - this is an approach that can be a trouble in large applications beacuse of the performance
 *
 * 2º use arrow functions - we calling the event handler and returning that value - this approach also has performance implications in some scenarios
 * 
 * 3º use bind keyword in the constructor  - this is the approach that is used in most of the cases, and is the approach in the official react documentention, it deals with binding event handler in the constructor as opposed to binding in the render method
 * 
 * 4º use an arrow function as a class property - basically change the way to define the method in the class
 * 
*/

import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
    
       this.state = {
         message: 'Hello'   
       }
    
       // 3 approach
      // this.clickHandler = this.clickHandler.bind(this)
    }

    // used for 1, 2 approach
    /*
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    */

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    
    return (
      <div>
        <h1>Binding Event Handlers</h1>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>click</button> */}
        {<button onClick={this.clickHandler}>click</button>}
      </div>
    )
  }
}

export default EventBind