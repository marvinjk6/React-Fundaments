/**
 * Before we learned how to add redfs to a normal HTML element like input, but it is also possible to add a ref to a CLASS Component, the parent pass the ref to his child
 * 
 * the goal is when click on the button in the parent component, the input element in the child component should be receive the focus, to achieve that is necessary to use refs
 *
*/

import React, { Component } from 'react'

export default class Input extends Component {

    constructor(props) {
      super(props)
      //1º step create the input reference
      this.inputRef = React.createRef()
     
    }

    // 3º step create the method that has the focus event
    focusInput() {
        this.inputRef.current.focus()
    }

  //2º step use the ref attribute to attach the ref in the input
  render() {
    return (
      <div>
        <label>Username: </label>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}
