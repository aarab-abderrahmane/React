// import {useState,useEffect} from 'react';

import React from "react";

function Timer(){


    const [seconds,setCount] = React.useState(0);
    
    React.useEffect(()=>{


        const Intervall = setInterval(()=>{

            setCount(s=> s+1)

        },1000);

        return()=>clearInterval(Intervall)

    },[])


    return(<h1>{seconds}</h1>)


}


export default Timer;