export function SupStagiaire({stagiaireData,handleDelete}){

        return (
            <>
            <table className="border border-black m-4 max-w-[90vw] w-full">
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>ville</th>
                        <th>actions</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        stagiaireData?.map(stg=>(
                            <tr>
                                <td>{stg.nom}</td>
                                <td>{stg.prenom}</td>
                                <td>{stg.Ville}</td>

                                <td>
                                    <button className="bg-red-500 text-red-950 p-1 " onClick={()=>handleDelete(stg.id)}>Supprimer</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <style jsx>
                {`
                    tr{
                        border : 1px solid black;
                    }

                `}
            </style>

            </>
           
        )



}