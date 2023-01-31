// React is a library that is used to create UI, we can use axios, axios is a promise based library that allow us to make HTTP requests to fetch or save data
//npm install axios

import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errorMessage: ""
    }
  } 
  
  // the get request is placed in the componentDidMount lifecycle method 
  // component did mount is executed only once when the component is created
  // the response is an object, one of the properties of this object is data which also an object that has multiples properties
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response)
        this.setState({ posts:  response.data})
    })
    .catch(error => {
        console.log(error)
        this.setState({ errorMessage: "Error retreiving data"})
    })
    
  }
  
  render() {

    const { posts, errorMessage } = this.state
    return (
      <div>
        <h1>List of posts</h1>
        {
            posts.length ?
            posts.map(post => <div key={post.id}><h3>Post:</h3> {post.title}</div>) :
            null
        }
        { errorMessage ? <div>{errorMessage}</div> : null }

      </div>
    )
  }
}
