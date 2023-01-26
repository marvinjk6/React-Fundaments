
import React, { Component } from 'react'

   
// rcp -  create an class component with extension ES7 + Rect/Redux
// rconst - create the constructor
export default class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
    }
    //when trying to mutate state directly in the console is possible to see but the UI stay the same, because the UI is not rearending

    //setState is asynchronous, sometimes we want to excecute a code only after the state has been updated, to handle such a situation pass a callbkack function as a second parameter to the setState method, whenever we need to excute some code after the state has been changed, we pass a callback function as the second parameter of setState method, not after the method

    /*
    increment() {
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    }
    */

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // ()=> {
        //     console.log('Callback value', this.state.count)
        // }
        // )
         // react may group multiple setState calls into a single update for a better performance, all the five setState calls are done in one sigle go
        // whenever we have to update the state based on the previous state, we need to pass a function as an argument to setstate method instead of passing in an object
        // the second parameter is the props object 
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=> this.incrementFive()}>Increment</button>
        </div>
    )
  }
}
