import React, { Component } from 'react'
import './App.css'
import ParentComp from './ParentComp'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div>
    )
  }
}

