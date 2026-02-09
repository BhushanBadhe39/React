import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState('');
    const [inputName, setInputName] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name.trim()) {
            console.log("Name: ",name);
            setInputName('')
        } else {
            alert("Enter Your Name")
        }
        
    }
  return (
    <div className='flex justify-center mt-6'>
        <form onSubmit={handleSubmit} className=' p-10 border-2 text-3xl'>
            <label>Name: </label>
            <input type='text' value={inputName} placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value);setInputName(e.target.value)}} className=" w-max rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></input><br/>
            <input type='submit'></input>
        </form>
    </div>
  )
}
