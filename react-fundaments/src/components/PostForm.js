//lets see how to post data to an api from our react application, in the API JSONPlaceholder the posts has id, userId, title and body, we're going to create  input fields, one for userId, title and body. We will store the data in the state object and make a post request on click of the submit button

import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       userId: "",
       title: "",
       body: ""
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  } 
  
  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  // prevent the default behaviour of the button in a form
  submitHandler(e) {
    e.preventDefault()
    console.log(this.state)
    // the post method has a second argument which is the data tha has to be sent, in this case the state
    // axios is a based promise library, so we have an response and a error
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
        console.log(response)
        // we get as a response the same object with the data property, with a unique ID property
        // this data object can then be used for any necessary changes in the UI, for example add this object to the end of the post list which might be displayed in the browser
    })
    .catch(error => {
        console.log(error)
    })
  }

  render() {

    const {userId, title, body} = this.state
    // add the onChange handler to track the change input
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>User: </label>
                <input 
                type="text" 
                name="userId" 
                value={userId} 
                onChange={this.changeHandler}/>
            </div>
            <div>
            <label>Title: </label>
                <input 
                type="text" 
                name="title" 
                value={title}
                onChange={this.changeHandler}/>
            </div>
            <div>
            <label>Body: </label>
                <input 
                type="text" 
                name="body" 
                value={body}
                onChange={this.changeHandler}/>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm

// posting data generally requires form validation, the library formic helps us with forms in react
