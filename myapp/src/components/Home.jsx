import React from 'react'
import '../assets/Home.css'

export default function Home(props) {
  return (
    <div className='text-center'>
      <h1>Hello {props.name}</h1>
      <h1>Your age is: {props.age}</h1>
    </div>
  )
}
