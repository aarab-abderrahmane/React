import {useState} from 'react';
import '../ex1/ex1.css'

const section_style = {
    width : "100vw" , 
    display : "flex" , 
    flexDirection : "column" , 
    justifyContent : "center" , 
    alignItems : "center" , 
    gap : "10px",
    padding : "20px"
}


function Button(){


    let [count,setCount] = useState(0);



    return (

        <div
        style = {section_style}>

          <button 
          className='btn'
          onClick={()=>setCount(count+2)}>Counter</button>

          <h2>{count}</h2>

        </div>

    )


};


export default Button ; 
