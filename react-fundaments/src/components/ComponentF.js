import React, { Component } from 'react'
import { UserConsumer } from './userContext'

//3º Step Consuming the context value
// To consume a context we need to use the Consumer Component
// pass in a function as its child, the function receives the context value as its parameter which can then be used to return the desired JSX

export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (username) => {
                return <h1>Hello {username}</h1>
            }
        }
      </UserConsumer>
    )
  }
}
