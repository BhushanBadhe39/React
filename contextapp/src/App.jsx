import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import ReducerComponent from './components/ReducerComponent'

function App() {
  

  return (
    <div>
      {/* <Parent/> */}
      <ReducerComponent/>
    </div>
  )
}

export default App
