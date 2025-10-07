import {useState} from 'react'
import React from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div  className='border-2 border-gray-950  flex flex-col items-center p-2 bg-blue-200 h-32'>
        <h2>Compteur : {count}</h2>
        <button onClick={() =>setCount(count + 1)}>Incrémenter</button>
        </div>
    );

    
}
export default Counter;