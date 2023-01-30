

import React, { Component } from 'react'
import PureComp from './components/PureComp'
import RegComp from './components/RegComp'

export default class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: "Marvin"
    }
  }

  componentDidMount() {
    setInterval(()=>{
        this.setState({
            name: "Marvin"
        })
    }, 2000)
  }

  render() {

    console.log('**********Parent Component render  *********')

    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}
