import React,{useState, useEffect} from 'react'

function Timer(){

        const[seconds,setSecond] = useState(0)
        useEffect(()=>{

                const interval = setInterval(()=>{
                    setSecond(prev=>{
                    console.log(prev)
                        
                        return prev + 1
                    })
                },2000)

        },[])

        return (
            <h2 className='h-20  bg-red-200'>Temps écoulé : {seconds}s </h2>
        )

}


export default Timer;