// when an error happens because of the conditions of the application the entire application crashes this obviously is not good, what we want is if a particular componet throws an error only tponet should fall back into a UI  and the remaining components should be unaffected


// where put ErrorBoundary, it's possible to wrap all the components that we want to treat if there's a error, however this might not be ideal, for example consider a ecommerce where we display thousand of products, just because there is an error in one product we can't hide the other 999 products. Instead of wrap all components together we can wrap each of the products with ErroBoundary

// Error boundaries catch errors during rendering in lifecycle methods and in the constructors of the whole tree below them, however the do not catch errors inside event handlers, if your application has a onclick handler to catch an error you just nedd to use the regular try catch statements

import React, { Component } from 'react'

class ErrorBoundary extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        hasError: false
     }
   }

   static getDerivedStateFromError(error) {
     return {
        hasError: true
     }
   }

   // this lifycicle method has 2 parementer error, info
   // info is the information related to the error
   // this method is pretty much used to log the errors, if you have a logging service it's possible to call it passing in the error and the info parameters
   componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
   }

  render() {
    if(this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    return this.props.children //refers to the compoenet we are actually rendering
  }
}

export default ErrorBoundary