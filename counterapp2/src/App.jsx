import { useState,useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './components/Api';

function App() {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');
  console.log(name);
  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log("Title Changed");
    
    
  }, [count]);
  
  const memoizedvalue = useMemo(()=>{
    console.log("Calling square...");
    return count**2;
    
  },[count])

  return (
    <>
      <h1 className=' text-red-700 font-extrabold font-mono'>Counter App</h1>

      <div id='counter' className=' m-10 p-6 border border-white rounded-2xl '>
        <h1>{count}</h1>
        <h1>{memoizedvalue}</h1>
        <div id='counterControl' className=' flex gap-10 justify-center m-10'>

        <button id='btn1' onClick={()=>setCount(count+1)} className=' w-25'>+</button>
        <button id='btn2' onClick={()=>setCount(count-1)} className=' w-25'>-</button>
        <button id='btn3' onClick={()=>setCount(0)} className=' w-25'>Reset</button>
        </div>
        <input placeholder='Enter Anything' type='text' onChange={(e)=>setName(e.target.value)} className=' p-1 border border-white rounded'/>
      </div>
      {/* <Api/> */}
    </>
  )
}

export default App
