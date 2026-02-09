import { useState } from 'react'

import './App.css'
import Card from './components/Card';
import CardList from './components/CardList';
import SearchUser from './components/SearchUser';
import TestData from './components/test-data.json';


function App() {
  // const [user, setUser] = useState()
  // const username = '1';

  
  // const fetchData = async () => {
  //   const res = await fetch(`https://api.github.com/user/${username}`);
  //   const data = await res.json();
  //   setUser(data);

  //   console.log(data);
    
  // }
  

  const [profiles, setProfiles] = useState(TestData);
  const searchUser = (userName)=>{
    if(!userName.trim()){
      setProfiles(TestData);
      console.log(profiles);
      return
    }
    const searchedUser = TestData.filter(user=>user.login.toLowerCase().includes(userName.toLowerCase()));
    console.log(searchedUser);
    
    setProfiles(searchedUser)
  }
  
  





  return (
    <>
      <h2>Hello Github</h2>
      <SearchUser onSearch = {searchUser}/>
      {console.log(profiles)}
      <CardList searchingUser = {profiles}/>
      
    </>
  )
}

export default App
