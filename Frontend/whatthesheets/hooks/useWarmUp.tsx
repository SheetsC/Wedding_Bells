import { useState, useEffect } from "react";

const useWarmUp = ()=>
{
    
    const makeWarmUpCall = ()=>{
        fetch(`https://weddingbells-api.onrender.com/rsvp`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then(r => r.json())
        .then(data=> {
            
            console.log(data)
        })
        .catch (error=> console.log(error))
    }
    return {makeWarmUpCall}
}
export default useWarmUp;