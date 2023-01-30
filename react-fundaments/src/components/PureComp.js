
// see the images to understand better, Pure Components only re-render the class component when there is a difference in the shalow comparison of props and state, this results in better performance

import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {

  render() {

    console.log('Pure Component render')

    return (
      <div>
        Pure Component
        {this.props.name}
      </div>
    )
  }
}
