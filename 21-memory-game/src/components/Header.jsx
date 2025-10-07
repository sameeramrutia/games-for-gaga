import React from 'react'

function Header({text}) {
  return (
    <h1 className="text-4xl font-bold text-center text-purple-00 my-8">Memory Game - {text}</h1>
  )
}

export default Header