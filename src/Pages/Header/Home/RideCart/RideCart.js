import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

const RideCart = () => {
    const [rides,setRides]=useState([]);
    useEffect(()=>{
        fetch('/Kingdom.json')
        .then(res=>res.json())
        .then(data=>setRides(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
            {
                rides.map(rede=><Cart rede={rede} key={rede.id}></Cart>)
            }
            
        </div>
    );
};

export default RideCart;