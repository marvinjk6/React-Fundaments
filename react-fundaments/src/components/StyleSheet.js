

import React from 'react'
import './myStyles.css'

/* ********** 1º way to stylling 
* we can use className and pass the class directelly on the element
* we can pass the prop primary on the parent to his child with the falue true or false
* to pass multiple classes the simplest way is to use template literals or there is a library called class-names that we can use
*
*/



export default function StyleSheet(props) {

  let className = props.primary ? 'primary' : ''

  return (
    <div>
      <h1 className={`${className} font-xl`}>className</h1>
    </div>
  )
}
