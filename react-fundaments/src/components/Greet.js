import React from 'react';

/********** PROPS with Functional components **********/

const Greet = (props) => {
    
    // here we use props.name with curly braces, the curly braces is a feature of JSX which is really helpfull and used a lot in React applications
    console.log(props)
    return (
        <div>
            <h3>Name: {props.name}</h3> 
            <h4>Hero name: {props.heroName}</h4>
            {props.children}
        </div>
    )
}

export default Greet;

