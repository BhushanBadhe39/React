import React, { useRef } from 'react'

export default function Uncontrolled() {
    const emailref = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(emailref.current.value);
        console.log(emailref);
        
    }
  return (
    <div className='flex justify-center mt-6'>
        <form className=' p-10 border-2 text-3xl bg-gray-400' onSubmit={handleSubmit}>
            
            <label>Email: </label>
            <input type='text' placeholder='Enter your Email' ref={emailref}
            className=" w-max rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></input><br/><br/>
            <input type='submit' className=' px-4 py-2 border-2 rounded-4xl'></input>

            
        </form>

        
        
    </div>
  )
}
