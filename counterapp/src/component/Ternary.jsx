import React from 'react'

export default function Ternary() {
    const isLoggedIn = false;
  return (
    <h1>
        {isLoggedIn?"Welcome,User":"Please Login First"}
    </h1>
  )
}

//  --------------------------------------------------------------------------------------

export function And() {
    const isLoggedIn =true;
  return (
    <div>
        <h1 className='text-center text-primary'>{isLoggedIn && "And Operator --> only works if condition is True"}</h1>
        
    </div>
  )
}



export function Or() {
    const isLoggedIn = false;
  return (
    <div>
        <h1 className='text-center text-primary'>{isLoggedIn || "Or Operator --> only works if condition is False"}</h1>
    </div>
  )
}


