/**
 * The goal is to pass a prop username from App component through C -> E -> F components, using Context
 */

import React, { Component } from 'react'
import ComponentE from './ComponentE'

export default class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}
