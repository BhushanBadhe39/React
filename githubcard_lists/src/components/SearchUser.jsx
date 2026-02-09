import React from 'react'
import { useState } from 'react';

export default function SearchUser({onSearch}) {
    
    const [userName, setUserName] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(userName);
        onSearch(userName)
    }



  return (
    <div>
        <form onSubmit={handleSubmit} className=' d-flex gap-4 justify-content-center m-4'>
            <input type='text' value={userName} onChange={(e)=>{setUserName(e.target.value)}}   placeholder='Search User'/>
            <button>Search User</button>
        </form>
    </div>
  )
}
