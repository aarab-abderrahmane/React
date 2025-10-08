import { StagiairesContext } from "./Stagiaire";
import { useContext } from "react";




export default function ListSTagiaire(){


    const {stagiaires,setStagiaires} = useContext(StagiairesContext)


    const rows= stagiaires.map((stagiaire,index)=>{

            const row = []

            for (let key in stagiaire){
                let bgColor  = '#22c55e' 

                if(key==="matricule" || key=== 'codepostal' || key==="moyenne"){
                    bgColor = '#16a34a'
                }
                
                row.push(
                    key === "id" ?
                    (<th scope="row" key={index} className=" backdrop-blur-md px-6 py-4 font-medium bg-green-500  text-green-50 whitespace-nowrap dark:text-green-100">{stagiaire[key]}</th>)
                    : <td className="px-6 py-4 bg-green-500  backdrop-blur-md" style={{backgroundColor :bgColor }} key={key} >{stagiaire[key]}</td>
                )
            }

            return (
                <tr className=" border-b border-green-400  backdrop-blur-md"  key={index+""}>{row}</tr>
            )

    })

    return (


        

            <div className="col-span-12 items-start  max-w-[1000px] w-[100vw] md:w-[70vw] overflow-x-auto shadow-md sm:rounded-lg  ">


                <table className="w-full text-sm text-left rtl:text-right text-green-100 dark:text-green-100">

                    <thead className="text-xs text-white uppercase bg-green-600/30 backdrop-blur-md border-b border-green-400/50 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-green-500/30  backdrop-blur-md">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3  backdrop-blur-md">
                                matricule
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-500/30  backdrop-blur-md">
                                nom
                            </th>
                            <th scope="col" className="px-6 py-3  backdrop-blur-md">
                                codepostal
                            </th>
                            <th scope="col" className="px-6 py-3 bg-green-500/30  backdrop-blur-md">
                                ville
                            </th>
                            <th scope="col" className="px-6 py-3  backdrop-blur-md">
                                moyenne
                            </th>

                        </tr>
                    </thead>

                    <tbody className=" backdrop-blur-md">
                        {rows}
                    </tbody>
                </table>
            </div>

    )

}