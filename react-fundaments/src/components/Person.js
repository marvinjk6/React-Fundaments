// the Person component is only responsible for rendering the person 

import React from 'react'

export default function Person({person}) {

     return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Skill: {person.skill}</p>
        </div>
    )
}
