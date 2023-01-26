import React from 'react';

// first way

/*
function Greet() {

     return(
         <h1>Hello world</h1>
    )
}
export default Greet
*/

// second way
/*
const Greet = () => <h1>Hello World</h1>

export default Greet;
*/


// third way
export const Greet = () => <h1>Hello Marvin</h1>