import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <div>
        <nav className='nav ps-3 fs-5 fw-bolder gap-5 justify-content-center' style={{backgroundColor : '#353839'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    </div>
  )
}
