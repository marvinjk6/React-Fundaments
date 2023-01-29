

// fragments let you group a list of children elements without adding extra nodes to the DOM, like div, inspect to see
// we can use <> </> instead of <React.Fragment>  <React.Fragment />, in this case is not possible to pass the attribute key={} at the Fragment when genereting a list with map
/**
 *  items.map(item => {
 *  <React.Fragment key={item.id}>
        <h1>Title</h1>
        <p>{item.title}</p>
    </React.Fragment>
 * })
 */

import React from 'react'

export default function FragmentDemo() {
  return (
    <React.Fragment>
        <h2>FragmentDemo</h2>
        <p>text text text</p>
    </React.Fragment>
  )
}
