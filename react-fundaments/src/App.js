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

