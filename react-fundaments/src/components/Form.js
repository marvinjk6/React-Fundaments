

import React, { Component } from 'react'

/**
 * controlled react componet needs a value and a change event
 * when assign a handler to the onChange event, the event itsel is passed as parameter to the handler
 * First: create a new state propertie
 * Second: puts the state propertie as the value for the input tag
 * Third: assing the handle change that updates the state
 * 
 * how to subimt the form: 
 * - add the button
 * - we need to have a function tha handles with the submit button default behaviour, 
 * - firts approach: in the form tag add onSubmit event and pass the function that handles the behaviour of the button with event.preventDefault()
 * - second approach: case of don't have a form tag which is not possible to listen the onSubmit event, its possible to add onClick event handler on the button
 */

export default class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments: '',
        topic: 'react'
      }
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value 
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} - ${this.state.comments} - ${this.state.topic}`)
        event.preventDefault()
    }

  render() {

    // destructuring the properties on the render method
    const { username, comments, topic } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName: </label>
            <input 
            type='text' 
            value={username} 
            onChange={this.handleUserNameChange}/>
        </div>

        <div>
            <label>Comments: </label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

