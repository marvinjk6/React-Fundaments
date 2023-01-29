
/** See the images 
 * 1- Constructor(props): 
 *  used: Initializing state, binding event handlers
 *  
 * 2- static getDerivedStateFromProps(props, state):
 * is rarely used, suppose there's a component which the state depends on the props being passed to the component in such scenario it's possible to use this method, this is a static method it doesn't have access to the this keyword, simply return the object that represents the new state of the component
 * 
 * 3- render():
 * used: read props and state and return JSX
 * 
 * 4- componentDidMount():
 * this method will be called only once in the whole lifecycle of a giver component
 * 
 * SEE the ORDER in CONSOLE
 * 
 */


import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {

  //First
  constructor(props) {
    super(props)
  
    this.state = {   
     name: 'Marvin'
    }
    console.log('LifecycleA constructor(props)')
  } 

  //Second
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  //Fourth
  componentDidMount() {
    console.log('LifecycleA componentDidMount')

  }

  //Third
  render() {
    console.log('LifecycleA render()')
    return (
      <div>
        LifecycleA
        <LifecycleB />
      </div>
      
    )
  }
}
