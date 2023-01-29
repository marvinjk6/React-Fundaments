
/**
 * Updating Lifecycle Methods
 * 
 * render and componentDidUpdate are the more commonly used method od the updating lifecycle methods
 * 
 */

import React, { Component } from 'react'

export default class LifecycleB extends Component {

  
  constructor(props) {
    super(props)
  
    this.state = {   
     name: 'Alan'
    }
    console.log('LifecycleB constructor')
  } 

  // first update lifecycle method
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')

  }

  // second update lifecycle method
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  //fourth update lifecycle method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

  //fifth update lifecycle method
  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')   
  }


  //third update lifecycle method
  render() {
    console.log('LifecycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}
