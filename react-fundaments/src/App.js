import React, { Component } from 'react'
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import CounterTwo from './components/CounterTwo'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterTwo render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}/>
        <CounterTwo render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />) }/>
        {/* <User  name={() => 'Marvin'}/> */}
        {/* <User name="José"/> */}
        <User name={ (isLoggedIn) => isLoggedIn ? "Marvin is logged" : "Welcome Guest"}/>
      </div>
    )
  }
}






