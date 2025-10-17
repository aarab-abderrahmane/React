import  {useState , useContext} from 'react'
import {SalarieContext}  from "./SalarieContext"

export default function Composant2(){

    const salarieData = useContext(SalarieContext)
    const [service,setServices] = useState("")
    const Filters =  salarieData.filter(salarie=> salarie.service.nomser.toLowerCase().includes(service.toLowerCase()))

    return (
        <>
        <input type="text" placeholder='filter by nom' value={service} onChange={(e)=>setServices(e.target.value)} ></input>
        <h1>Liste des Salariés</h1>
        <table>

            <thead>
            <tr>
                <th>nom</th>
                <th>prénom</th>
                <th>fonction</th>
                <th>service</th>

            </tr>
            </thead>

            <tbody>
                
                    {Filters.map(sal=>
                        <tr>
                            <td>{sal.nomsal}</td>
                            <td>{sal.prenomsal}</td>
                            <td>{sal.fonction}</td>
                            <td>{sal.service.nomser}</td>

                        </tr>
                    )}                

            </tbody>


        </table>
        
        </>
    )
}