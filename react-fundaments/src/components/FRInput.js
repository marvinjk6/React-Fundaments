/*
* Forwarding refs is a technique for automatically passing a ref through a component to one of its children
* the goal is when click in the button of the parent the child input should receive focus
*/



import React from 'react'

//3º step create a component with the React forwardRef()
// to use forward ref is necessary to change we create the component
// the forward method accepst a component as parameter
// the first parameter of a functional compoenet is props, when creating a component with fowardRef method the second parameter is ref
// ref is the ref of the parent component

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 
export default FRInput
