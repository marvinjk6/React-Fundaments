
/**
 * Parent component can pass down props to its children components, when passed as props is available in the children component
 * 
 * what if a child component wanted to communicate with the parent component? we still use props, but this time we pass a reference to a method as props to the child component tag
 * 
 * what we want is when click the button in the ChildComponent the method greetParent() of the ParentComponent execute, we pass the method as a prop {greetHandler} to the ChildComponent
 */

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }

    //we need to bind the method
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
