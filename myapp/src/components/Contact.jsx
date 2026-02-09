import React from 'react'

export default function Contact(props) {
  
  if(props.isLogin){
    return <h1>Hello Bhushan</h1>
  }
  else{
    return <h1>Please Login</h1>
  }
  
}
