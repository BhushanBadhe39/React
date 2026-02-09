import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Projects() {
  return (
    <div className=' d-flex flex-column justify-content-center'>
        <h1 className=' text-center mb-5'>Projects</h1>
        <div className=' w-50 text-center bg-secondary'>
            <Link to="personal" className='fs-3'>My Projects</Link>

        </div>
        <div className=' w-50 text-center bg-secondary'>
            <Link to="group" className=' fs-3'>Team Projects</Link>

        </div>
        <Outlet/>
    </div>
  )
}
