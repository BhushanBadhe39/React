import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
import Myform from './components/Myform'
import Studentregisteration from './components/Studentregisteration'
import Error from './components/Error'

function App() {

  return (
    <div>
    <Error/>
    {/* <Studentregisteration/> */}
      {/* <h1 className=' text-red-800 text-center font-extrabold text-8xl font-serif text-shadow-md text-shadow-black'>Forms</h1>
      <Controlled/>
      <Uncontrolled/>
      <Myform/> */}
    </div>
  )
}

export default App
