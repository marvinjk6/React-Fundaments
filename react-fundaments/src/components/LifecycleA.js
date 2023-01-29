
/** See the images - Component Mounting Lifecycle Methods
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

  constructor(props) {
    super(props)
  
    this.state = {   
     name: 'Marvin'
    }
    console.log('LifecycleA constructor(props)')
  } 

  // first update lifecycle method
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')

  }

  // second update lifecycle method
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  //fourth update lifecycle method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  //fifth update lifecycle method
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')   
  }

  changeState = () => {
    this.setState({
        name: 'Shinigami'
    })
  }
  
  // third update lifecycle method
  render() {
    console.log('LifecycleA render()')
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
      
    )
  }
}
