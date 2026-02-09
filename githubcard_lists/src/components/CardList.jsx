import React from 'react'
import { useState } from 'react'
import FullData from './test-data.json'
import Card from './Card'

export default function CardList(props) {
    let TestData = []
    if(props.searchingUser.length>0){
        TestData = props.searchingUser;
    }
    else{
        TestData = FullData;
    }
    const [pageNumber,setPageNumber] = useState(0);
    const pageSize = 3;
    const [profiles,setProfiles] = useState(TestData.slice(pageNumber,pageNumber+pageSize));



    const prevPage = ()=>{
        let num = pageNumber-1;
        if(num>=0){

            let start = num*pageSize
            let end = start + pageSize
            setPageNumber(num)
            setProfiles(TestData.slice(start,end));
            console.log("Prev page");
        }
        
    }
    const nextPage = ()=>{
        let num = pageNumber+1;
        if(num<TestData.length/pageSize){

            let start = num*pageSize
            let end = start + pageSize
            setPageNumber(num)
            setProfiles(TestData.slice(start,end));
            console.log(num);
        }
            
    }
  return (
    <div>
        <button className=' me-3' onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        <br></br>
        {
            profiles.map(profile=>(
                <Card profile={profile}  key = {profile.id} />
            ))
        }
    </div>

  )
}
