import React from "react";

/***** Destructuring props and state - Functional Component
 * Destructuring is a ES6 feature that makes it possible to unpack values from arrays or properties from objects into distinct variables
 * In react Destructuring improves code readability  
 */

// firts way to destructuring in the parameter
const DestructuringFunctional = ({name, sword}) => {

  // second way in the body function - is necessary to pass prpos as parameter
  //const {name, sword} = props

  return (
    <div>
       <h1>{name}</h1>
       <h4>{sword}</h4>
    </div>
  )
}

export default DestructuringFunctional
