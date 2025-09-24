import {useState} from 'react'

function Toggle(){

    //     const state = useState("abderrahmane");
    // const name = state[0];
    // const setName = state[1];

    const [name,setName] = useState("abderrahmane")

    console.log(name)


    const handleChange = ()=>{

        name==="abderrahmane" ? setName('ahmed') : setName('abderrahmane')
    }

    return(
        <div>
        <button onClick={handleChange}>Add to change</button>
        <h1>{name}</h1>
        </div>
    )
}


export default Toggle;