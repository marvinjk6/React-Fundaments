import React, { Component } from 'react'
import Input from './Input'

export default class FocusInput extends Component {

  constructor(props) {
    super(props)
  
    //4º create the reference for the parent component
    this.componentRef = React.createRef()
    this.clickHandler = this.clickHandler.bind(this)
  }

  // the focusInput method was defined in the Input Component
  // Final step use the focusMethod defined in the child Component in the fuction tha handles the click
  clickHandler() {
    this.componentRef.current.focusInput()
  }

  //5º step attach the reference to the child component
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        {/** 6º create the button with the function tha handle th click */}
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}
