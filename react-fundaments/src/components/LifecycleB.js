
import React, { Component } from 'react'

export default class LifecycleB extends Component {

  //First
  constructor(props) {
    super(props)
  
    this.state = {   
     name: 'Alan'
    }
    console.log('LifecycleB constructor')
  } 

  //Second
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  //Fourth
  componentDidMount() {
    console.log('LifecycleB componentDidMount')

  }

  //Third
  render() {
    console.log('LifecycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}
