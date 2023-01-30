
import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
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
                return { count: prevState.count + 1 }
            })
        }

        // pass the method and the state using this
        render() {
            return <OriginalComponent
            name="Marvin"
            count={this.state.count}
            incrementCount={this.incrementCount}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent
// after exporting the components in the Higher Order Component method, they both have acces to the prop name 
// the functionality we want to share is incrementCount, let's put it in the Higher Order Component (UpdadeComponent), now we need to pass down the state and the increment count method as props so that the original component can make use of that functionality