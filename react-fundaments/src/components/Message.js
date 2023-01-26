import React, { Component } from 'react';

class Message extends Component{

    // the state is usually inside the constructor
    constructor() {
        super()
        this.state = {
            message: 'Hello Visitor'
        }
    }
    //method to change the state - setState
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
               <h1>{this.state.message}</h1>
               <p>Let's learn about state, click in message</p>

               <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default Message;