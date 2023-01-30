
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