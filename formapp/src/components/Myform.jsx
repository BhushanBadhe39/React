import React from 'react'
import {useForm} from 'react-hook-form'

export default function Myform() {
    const {register,handleSubmit} = useForm()
    const onSubmit = (data)=>{
        console.log(data);
        
    }
  return (
    <div className='flex justify-center mt-6'>
        <form className=' p-10 border-2 text-3xl bg-gray-400' onSubmit={handleSubmit(onSubmit)}>
            
            <label>Name: </label>
            <input type='text' placeholder='Enter your Name' {...register('name')} className=" w-max rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></input><br/><br/>
            <label>Email: </label>
            <input type='text' placeholder='Enter your Email' {...register('email')} className=" w-max rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></input><br/><br/>
            <input type='submit' className=' px-4 py-2 border-2 rounded-4xl'></input>

            
        </form>
    </div>
  )
}
