
/**
 * the idea is the message to be conditionally rendered based on the state isLoogedIn, if I am logged true the message Welcome Marvin shoud be displayed, if i am not logged false the message Welcome Guest  should be displayed
 * 
 * 1º approach: if else condition, used in the render method, the if-else condition don't work in JSX, we need to return statement containing the JSF for each condition  
 * 
 * // 1º approach

    if(this.state.isLoggedIn) {
        return (
            <div>
                Welcome Marvin
            </div>
         )
    } else {
         return (
             <div>
                 Welcome Guest
             </div>
         )
    }
 *  
 * 2º approach: Element Variable, declare a variable in the render method and return the if or esle condition
 * 
 * //2º approach
    let message
    if(this.state.isLoggedIn) {
        message = <div>Welcome Marvin</div>
    } else {
        message = <div>Welcome Guest</div>
    }

    return (
        <div>
            {message}
        </div>
    )

 * 
 * 3º approach: Ternary Condition, this we can use in JSX this is the recommended approach
 * 
 * render() {
        return  (
            this.state.isLoggedIn ? <div>Welcome Marvin</div> : <div>Welcome Guest</div>
        )

    }

    4º approach: Short-circuit operator, here if isLoggedIn true display Welcome Marvin if false nothing should display
 */

import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {

       return this.state.isLoggedIn && <div>Welcome Marvin</div>

    }
}
