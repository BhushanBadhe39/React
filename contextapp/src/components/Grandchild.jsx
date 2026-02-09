import React, { useContext } from 'react'
import {contextInfo} from './Parent.jsx'

export default function Grandchild() {
    const name = useContext(contextInfo);
    console.log(name);
    
  return (
    <div>
        <h1 className=' text-center text-blue-800 '>Hello {name}</h1>
    </div>
  )
}
