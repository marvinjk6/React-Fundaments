import React from 'react';

// creating a component with JSX 

const Hello = () => {
    // createElement is a function that has 3 parameters
    // firts parameter is a string which specifies the HTML tag
    // second the parameter we get to pass any optional proprerties
    // third is the children for the html element

    // see the console to see the properties of the element
    return React.createElement(
        'div'
        , {id: 'hello', className: 'hello_class'}, 
        React.createElement('h2', null, 'Hello Marvin'))

}

export default Hello