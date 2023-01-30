import React from 'react'

//Like Pure Component, memo has the same goal improve performance for funcional components, if the state don't change the componets is'not going to re-render

function MemoComp({name}) {

  console.log('Rendering memo component')

  return (
    <div>{name}</div>
  )
}

// use the React.memo() method, this is something called High order component, later we're going to learn
export default React.memo(MemoComp)
