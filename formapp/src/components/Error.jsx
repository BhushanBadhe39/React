import React, { useEffect, useState } from 'react'

export default function Error() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        async function fetchData() {
            try {
                const res = await fetch('https://api.github.com/users');
                const data = await res.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log("We cannot fetch the data from the server", error);
                setError(error);
            }
            
        }
        fetchData();
        
    }, []);

        if (error) {
            return <h1>{error.message}</h1>
        }
        return(
            <div>
                <h1>{
                    data ? JSON.stringify(data) : "Loading..."
                }</h1>
            </div>
        )

}
