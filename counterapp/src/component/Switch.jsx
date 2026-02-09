import React from 'react'
import Forms from './Forms';

export default function Switch() {
    const pageState = 'Loading'
    switch(pageState){
                    case 'Closed' : 
                        return <h1>Closed</h1>;
                        break
                    case 'Loading': 
                        return <Forms/>
                        break
                    case 'Pending':  
                        return <h1>Pending</h1>;
                        break
                    case 'Completed':  
                        return <h1>Completed</h1>;
                        break
                    default : 
                        return <h1>Switch Page Works</h1>
                }
}