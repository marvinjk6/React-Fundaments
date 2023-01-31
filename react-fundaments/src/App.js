import React, { Component } from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

//2º we need to provide this UserContext using the UserProvider component, The place where the Provider will be place is important because only the descendant components can consume it, App component can be a good place because all components fall under it
// Wrap ComponentC with the Provider
// The way to provide is usign the value attribute on the Provider Component
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Marvin">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}






