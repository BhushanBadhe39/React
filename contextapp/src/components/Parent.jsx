import React from 'react'
import '../App.css'
import { createContext } from "react";
import Child from './Child';


export const contextInfo = createContext();

export default function Parent() {

  const name = "Bhushan";

  return (
    <div>
        <h1 className=' text-center'>Hello Child!</h1>
        <contextInfo.Provider value={name}>
            <Child/>
        </contextInfo.Provider>
    </div>
  )
}
