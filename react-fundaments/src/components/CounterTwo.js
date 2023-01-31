/**
 * What's Render Props?? the term 'render props' refers to a a technique for SHARING CODE between React components using PROP WHOSE VALUE IS A FUNCTION
 *  
 * in react is possible to use a prop whose value is a function to control what is actually render by a component
 * 
 * Similar with High Order Components here we have two components which share the same funcionality, now we're going to use the Render Props Pattern
 * 
 */

import React, { Component } from 'react'

export default class CounterTwo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
  
        this.incrementCount = this.incrementCount.bind(this)
      }
  
      incrementCount() {
          this.setState(prevState => {
              return { count: prevState.count + 1 }
          })
      }
  
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

// 1º App component has CounterTwo Component

// 2º CounterTwo component has coount state and increment method, Counter compoenet does not render anything on its own,it is simple going to return whatever is passed as the render property and while doing so it passes the count state and the increment method

//3º the render prop is the ClickCounterTwo and HoverCounterTwo components, the count state and the increment method from the CounterTwo component are passed as props to the  ClickCounterTwo and HoverCounterTwo

//4º the prop that pass the state and the method can be called of anything we wish, but render is kind of the convention

/** 2º Approach, replace:
 * in App
 * <Counter>
 * {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
 * <Counter/>
 * 
 * 
 * in CounterTwo.js
 * 
 * Anything within components opening and closing tags will be passed as the props.children
 * 
 * render() {
    return (
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
 * 
 */