export const StagiaireCard = (props)=>{

    
    const {nom , ville , prenom  , filiere , image_src ,id } = props


    return (

        <div key={id} className="border border-1 border-black w-full sm:w-[240px] " >
            
            <img
             src={typeof(image_src) !=="string" && image_src instanceof File ?  URL.createObjectURL(image_src) : image_src } alt={nom}
             className="w-full h-[150px] object-cover" />
            
            <div  className="p-2">   
                    <p>
                        <b>Nom et prenom : </b>
                        {nom} & {prenom}
                    </p>

                    <p>
                        <b>ville : </b>
                        {ville}
                    </p>

                    <p>
                        <b>filiere : </b>
                        {filiere}
                    </p>
            </div>

        </div>


    )


}