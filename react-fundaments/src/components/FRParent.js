

import React, { Component } from 'react'
import FRInput from './FRInput'

export default class FRParent extends Component {


   constructor(props) {
     super(props)
     
     // 1º step create a ref at the parent component
     this.inputRef = React.createRef()
    
   }

  // 4º step create the function the handles the click event and focus to input
  handleClick() {
    // forwardRef points to the native element, the input of the FRInput child, we can use focus() directly 
    this.inputRef.current.focus()
  } 

  // 2º step using the ref atribute to attach the parent ref with the child component
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.handleClick.bind(this)}>Focus Input</button>
      </div>
    )
  }
}
