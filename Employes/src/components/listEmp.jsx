import {employeesContext} from '../App'
import { useContext } from 'react'

export default function ListEmp(){
        
        const {employees} = useContext(employeesContext)
        const Lists = ()=>  employees.map(emp=><ul>
            <li><b>id : </b>{emp.id}</li>
            <li><b>nom : </b>{emp.nom}</li>
            <li><b>salaire : </b>{emp.salaire}</li>
            <li><img src={emp.image} className='w-[100px] h-[100px]'></img></li>
            <li><button className='bg-blue-300 border-2 cursor-pointer px-2'  onClick={()=>console.log('edit')}>edit</button></li>
        </ul>)

        

        return (
            <div className='w-[50%]  grid grid-cols-4 gap-4 p-6'>
            <Lists/>

            </div>
        )

}