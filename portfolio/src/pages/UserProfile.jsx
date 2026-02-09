import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const {id} = useParams();
  return (
    <div className=' text-center mt-5 text-secondary'>
        <h1>Welcome to profile page</h1>
        <h1>{id}</h1>
        <h2>What are you doing today?</h2>
    </div>
  )
}
