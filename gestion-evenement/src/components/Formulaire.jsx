import { useState } from "react"
import styled from "styled-components"

export default function Formulaire(){

    const [confirm , setConfirm] = useState(false)
    const [evenement , setEvenement] = useState({theme:"",date_deb:"",date_fin:"",cout:"",expert:""})

    const handleClick = (e)=>{
        e.preventDefault()
        setConfirm(true)
    }

    const handleChange = (e)=>{setEvenement({...evenement,[e.target.name]:e.target.value})}



    return(

        <div>
            <h1>Formulaire de l'événement</h1>
            <Styledform>
            <form className="flex flex-col">

                <label>Théme</label>
                <input type="text" name="theme" onChange={handleChange}></input>
                <label>Date de début </label>
                <input type="date" name="date_deb" onChange={handleChange}></input>
                <label>Date de fin</label>
                <input type="date" name="date_fin" onChange={handleChange}></input>
                <label>Cout</label>
                <input type="number" name="cout" onChange={handleChange}></input>
                <label>Expert</label>
                <input type="text" name="expert" onChange={handleChange}></input>

                <button  onClick={handleClick} style={{backgroundColor : confirm? "gray" : "green" }} >Comfirmer</button>

            </form>
            </Styledform>

            {

                confirm && (
                    <ul>
                        {Object.keys(evenement).map((key,i)=><li key={i}><b>{key} : </b>{evenement[key]}</li>)}
                    </ul>
                )
            }
        
        </div>

    )


}



const Styledform = styled.form`

    input{

        border : 1px solid black;  
        padding : 5px

    }


`