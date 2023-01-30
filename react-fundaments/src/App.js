import React, { Component } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}
//Summary
// here we included the ClickCounter and HoverCounter
/* In ClickCounter and HoverCounter we are exporting UpdatedComponent HOC passing in the ClickCounter an HoverCounter
export default UpdatedComponent(ClickCounter)
export default UpdatedComponent(HoverCounter)
*
*/

//UpdatedComponent is defined in withCounter.js file. UpdatedComponent is a function which accepts the OriginalComponent as its paremeter and returns a NewComponent, NewComponent has functionality to maintain the state of count property and also a method to increment that current property, both of them are passed as props to the Original Commponent

/*
 * the CONVENTION to write the names would be replace UpdatedComponent to withCounter
 * OriginalComponent to WrappedComponent
 * NewComponent to WithCounter
 */



