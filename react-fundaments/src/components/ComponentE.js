import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

//Context Type Property: before we used the consumer component to consume the context value in ComponentF, but there is another way to do that

//this approach only works with class components and supports one context

export default class ComponentE extends Component {

  static contextType = UserContext

  render() {
    return(
      <div>
        Component E Context {this.context}
        <ComponentF />
      </div>
    )
    
  }

}

 // out of the class method 1º way
 //ComponentE.contextType = UserContext
