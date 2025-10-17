import {useState} from 'react'

export default function Composant1(){



        const [dataVoiture,setDataVoiture] = useState({matricule:"",marque:"",date:"",couleur:""})
        const [confirme,setConfirme] = useState(false)
        const handleChange = (e)=>setDataVoiture({...dataVoiture,[e.target.name]:e.target.value})
        
        const handleClick = (e)=>{

            e.preventDefault()
            setConfirme(true)
        }
        return(

                <div>
                <form >

                        <label>Matricule</label>
                        <input type="text" name="matricule" onChange={handleChange}></input>
                        <label >Marque</label>
                        <input type="text" name="marque" onChange={handleChange}></input>
                        <label>Date de mise en circulation</label>
                        <input type="date" name="date" onChange={handleChange}></input>
                        <label>Couleur</label>
                        <input type="text"  name="couleur" onChange={handleChange}  ></input>

                        <button onClick={handleClick}  >Comfirm</button>
                </form>



                    {confirme && (

                        <div>
                            Récapitulatif des informations
                            <ul>

                                <li>Matricule : {dataVoiture.matricule}</li>
                                <li>marque : {dataVoiture.marque}</li>
                                <li>Date mise en circulation : {dataVoiture.date}</li>
                                <li>Couleur : {dataVoiture.couleur}</li>
                            </ul>

                        </div>

                    )}


                </div>
        )

}