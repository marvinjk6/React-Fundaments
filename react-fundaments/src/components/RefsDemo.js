
/**
 * the concept of Refs in react basically make possible to acess DOM nodes directly withing react
 * 
 * One of the more commom cases is focusing a text input, for example suppose we have a login form, as soon as the page is loaded let's say by default we want the username input field to be focused
 *  */ 

import React, { Component } from 'react'

export default class RefsDemo extends Component {
  
  constructor(props) {
    super(props)
  
    // 1º way first step create React.createRef in the constructor
    this.inputRef = React.createRef()

    // 2º way first step use callback
    this.callbackRef = null
    this.setCallbackRef = (element) => {
        this.callbackRef = element
    }
  }

  // to see what exactly does the property this.inputRef
  // we see an object with the propertie current, current has properties, one of them is onfocus, but in javascript is focus
  /*1º way: final step call the focus method on this input element*/
  componentDidMount() { 
    this.inputRef.current.focus()
    console.log(this.inputRef)

    /*** 2º way if this.callback !== null 
    if(this.callbackRef) {
        this.callbackRef.focus()
    }
    */
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  //1º way: second step attach a ref we make, use the reserved ref attribute
  render() {
    return (
      <div>
        <label>Username: </label>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <label>Username</label>
        <input type="text" ref={this.setCallbackRef} />
      </div>
    )
  }
}
