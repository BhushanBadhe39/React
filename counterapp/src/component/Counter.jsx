import React, { useState } from 'react'
import '../App.css'
import tropicalFlowers from '../assets/images/Tropical-Flowers.jpg'

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1 className='counterText'>Counter App</h1>
        <img src={tropicalFlowers} className='w-25 d-block mx-auto my-5 rounded-pill'/>
      <div className="counter">
        <h3>Count : {count}</h3>
        <div>
          <button className="btn btn-success" onClick={()=>setCount(count+1)}>+</button>
          <button className="btn btn-warning" onClick={()=>setCount(count-1)}>-</button>
          <button className="btn btn-danger" onClick={()=>setCount(0)}>Reset</button>
        </div>
        

      </div>
      <br/><br/>
    </div>
  )
}
