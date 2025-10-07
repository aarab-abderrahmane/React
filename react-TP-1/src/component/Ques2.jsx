import { useRef , useEffect } from "react";
export  default function AutoFocusInput(){

        const inputRef = useRef(null)

        useEffect(()=>{

                inputRef.current.focus()
                console.log(inputRef.current.value)

        },[inputRef.current.value])

        return <input type="text" placeholder="Votre nom" ref={inputRef} className="h-30" />; 

}