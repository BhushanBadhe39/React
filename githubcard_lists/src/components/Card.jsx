import React from 'react'
import '../App.css'

export default function Card(props) {
    const profile = props.profile;
    
  return (
    
    <div className='profile-page d-flex justify-content-center flex-column'>
        {/* {testData.map(a=>(
            <div key={a.id} className='profile-data d-flex align-items-center gap-5 shadow bg-light p-4 m-2'>
                <img src={a.avatar_url} alt={a.login} className=' img-thumbnail rounded-circle w-25'/>
                <div className='profile-details'>
                    <h3>Username : {a.login}</h3>
                    <a href={a.html_url}>Click here to see more details</a>
                </div>
            </div>
        ))} */}
        <div className='profile-data d-flex align-items-center gap-5 shadow bg-light p-4 m-4'>
            <img src={profile.avatar_url} alt={profile.login} className=' img-thumbnail rounded-circle w-25'/>
            <div className='profile-details'>
                <h3>Username : {profile.login}</h3><br/>
                <a href={profile.html_url}>Click here to see more details</a>
            </div>
        </div>
    </div>
  )
}
