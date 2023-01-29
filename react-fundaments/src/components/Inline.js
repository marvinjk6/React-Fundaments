

import React from 'react';

/** /********** 2º way inline 
 
 * Inline styling are specified with an object whose key is the camelCase version of the style name and the value is usually a string
 * 
 */

export default function Inline() {

    const heading = {
        fontSize: '40px',
        color: 'blue'
    }

  return (
    <div style={heading}>Inline</div>
  )
}

