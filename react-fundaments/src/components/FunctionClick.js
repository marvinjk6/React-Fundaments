// in a web application we want to interate with the user, and we use events to do this
// in react events are named using camelCase

// snippet rfce - creates a functional component

/**
 * One of the most mystakes is to pass a function call clickHandler()
 * in react we pass the function not a function call - clickHandler
 */

import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Function Componet Click')
    }

  return (
    <div>
        <h3>Function Component</h3>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
