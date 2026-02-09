import React from 'react'
import { useState } from 'react'
import '../App.css'

export default function Forms() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [dob,setDob] = useState('');
  const [gender,setGender] = useState('');

  const handle_Submit = (e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(dob);
    console.log(gender);
  }
  
  return (
    <div className='d-flex justify-content-start ' >
        <form className='form-control m-5 p-4 min-vw-25' onSubmit={handle_Submit}>
            <label>Name: </label>
            <input  type='text' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
            <label>Email: </label>
            <input  type='email' onChange={(ev)=>setEmail(ev.target.value)}></input><br></br><br></br>
            <label>Password: </label>
            <input  type='password' onChange={(eve)=>setPassword(eve.target.value)}></input><br></br><br></br>
            <label>D.O.B: </label>
            <input  type='date' onChange={(even)=>setDob(even.target.value)}></input><br></br><br></br>
            <label>Gender:</label>
            <input  type='radio' name='Gender' value='Male' onChange={(event)=>setGender(event.target.value)}></input>Male
            <input  type='radio' name='Gender' value='Female' onChange={(event)=>setGender(event.target.value)}></input>Female
            <input  type='radio' name='Gender' value='Others' onChange={(event)=>setGender(event.target.value)}></input>Others<br></br><br></br>
            <button className='btn btn-info'>Submit</button>
        </form>
        <div className='m-5 text-secondary'>
          <h1>Name:</h1>
          <h1>Email:</h1>
          <h1>Pass:</h1>
          <h1>D.O.B:</h1>
          <h1>Gender:</h1>
        </div>
        <div className='m-5 text-info'>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{password}</h1>
          <h1>{dob}</h1>
          <h1>{gender}</h1>
        </div>
    </div>
  )
}
