
import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
          this.incrementCount = this.incrementCount.bind(this)
        }

        incrementCount() {
            this.setState(prevState =>{
                return { count: prevState.count + incrementNumber }
            })
        }

        // the sword comes from App.js
        // when passing we need to use the spread operator
        render() {
            console.log(this.props.sword)

            return <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent
// after exporting the components in the Higher Order Component method, they both have acces to the prop name 
// the functionality we want to share is incrementCount, let's put it in the Higher Order Component (UpdadeComponent), now we need to pass down the state and the increment count method as props so that the original component can make use of that functionality

// 1º When passing props on the Parent who receives the props is the HOC, so we need to use the spread operator and pass props to ClickCounter and HoverCounter has access of the props of their Parent {...this.props}

// 2º Passing parameters to the hoc function, instead of increment bu one, i want to increment it by different number for both the counter components, we can do that by passing a parameter to the hoc function


//Summary
// here we included the ClickCounter and HoverCounter
/* In ClickCounter and HoverCounter we are exporting UpdatedComponent HOC passing in the ClickCounter an HoverCounter
export default UpdatedComponent(ClickCounter)
export default UpdatedComponent(HoverCounter)
*
*/

//UpdatedComponent is defined in withCounter.js file. UpdatedComponent is a function which accepts the OriginalComponent as its paremeter and returns a NewComponent, NewComponent has functionality to maintain the state of count property and also a method to increment that current property, both of them are passed as props to the Original Commponent

/*
 * the CONVENTION to write the names would be replace UpdatedComponent to withCounter
 * OriginalComponent to WrappedComponent
 * NewComponent to WithCounter
 */