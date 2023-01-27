/**
 * When we build web applications a common scenarios is to display a list of items, for example a list of names, a list of products, a list of courses and so on.
 * What we want is to repeat some HTML for each item in the list
 * 
 * We can use the map method to quicly iterate over an array and return a new array with the desired changes applied. In react we will be transforming the map into JSX
 * 
 * Typically when building an aplication we are going to have a list of objects with a few properties that have to be rendering, in such cases it is always a good ideaa to refactor the JSX into a separete component and then use the component in the map method JSX, was Created Person.js componet
 * Names is an Array
 * PERSONS is an object
 * 
 */


/**
 * Lists an Keys
 * Each list using the map method shoukd have a unique 'key' prop
 * Add a key prop in the person component in the map method function which contains <Person key={person.id} /> 
 * 
 * the key propertie doens't always need to be an id it can be a name for example
 * the key props is not accecible in the child component, react needs the key prop to render the list efficiently, if we need a vqleu to be used in the child component we have to pass it as a different prop. Key prop is reserved
 * 
 * Why we need key props? the keys help react identify which items in a list have changed or added or removed, and place a crucial role in handling UI, when it has a key react compare the items in the list and render the list making the necessaries changes , without a key react render all the list again it is less efficient.
 */

import React from 'react'
import Person from './Person'

export default function NameList() {

    //const names = ['Alphonse', 'Luffy', 'Light', 'Goku']
    //const nameList = names.map(name => <h3>{name}</h3>)

    const persons = [
        {
            id: 1,
            name: 'Alphonse',
            age: 15,
            skill: 'Alchemy'
        },
        {
            id: 2,
            name: 'Ichigo',
            age: 30,
            skill: 'Heiatsu'
        },
        {
            id: 3,
            name: 'Light',
            age: 30,
            skill: 'Intelligence'
        },

        {
            id: 4,
            name: 'Goku',
            age: 30,
            skill: 'KI'
        }
    ]

    //Namelist is only responsible for render the personList

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    
    return (
        <div>
            <h1>Person List</h1>
            {/*nameList*/}
            {/** names.map(name => <h3>{name}</h3>) */}
            {personList}
        </div>
    )
}
