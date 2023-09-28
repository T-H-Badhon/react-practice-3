import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';

const LoadData = () => {
    const [profiles,setProfiles]=useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=> setProfiles(data))
    }
        
    ,[])
    return(
        <div>
            {
             profiles.map(p=> <ShowData profile={p} key={p.id}></ShowData>)
            }
        </div>
    )

};

export default LoadData;