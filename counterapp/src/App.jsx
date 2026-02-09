import './App.css'
import { useState } from 'react'
import Forms from './component/Forms';
import Home from '../../myapp/src/components/Home';
import Contact from '../../myapp/src/components/Contact';
import Ternary, { And, Or } from './component/Ternary';
import Counter from './component/counter';
import Switch from './component/Switch';

function App() {
  const [count, setCount] = useState(0);
  const areYouNoob = false;
  const isLogged = true;
  return (
    <>

      {areYouNoob?<Ternary/>:<Contact isLogin = {true} isMale = {true}/>}

      {isLogged?<Counter/>:<Forms/>}
      <Home name='Bhushan' age={20}/>      {/* This is a use of props. Sent to home.jsx */}
      <Contact isLogin = {false} isMale = {true}/>          {/*This is an Example of Conditional Rendering */}
      <Switch/>
      <And/>
      <Or/>
      {/* <Forms/> */}
    {/* <Ternary/> */}
      {/* <h1>Counter App</h1>
      <div className="counter">
        <h3>Count : {count}</h3>
        <div>
          <button className="btn btn-success" onClick={()=>setCount(count+1)}>+</button>
          <button className="btn btn-warning" onClick={()=>setCount(count-1)}>-</button>
          <button className="btn btn-danger" onClick={()=>setCount(0)}>Reset</button>
        </div>
        

      </div> */}

    </>
  )
}

export default App
