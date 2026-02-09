import React,{useEffect} from 'react'
import { useState } from 'react';

export default function Api() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users').then((res)=>res.json().then((data)=>{
            setUser(data);
        }))
        
    }, []);
    
  return (
    <div>
    <h1>Users</h1>
 
            {
                user.map((loginId)=>{
                    return <div key={loginId.id} className=' bg-red-600 border-4 border-amber-500 rounded-2xl m-10 p-5 text-amber-300 '>
                        <h1 className=' mb-3'>Name : {loginId.login}</h1>
                        <h1>Id : {loginId.id}</h1>
                    </div>
                })
            }
       
    </div>
  )
}
