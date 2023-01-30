
//snippet to create fuctional components - rfc or rfce


import React from 'react'

function Hero({heroName}) {
  
  // condition
  if(heroName === 'Joker') {
    throw new Error('Not a hero')
  }  

  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero
