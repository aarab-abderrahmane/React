import  {StagiaireCard} from "./StagaireCard"

export const ListeStagiaire = ({data}) => {


    return(

        <div className="max-w-7xl mx-auto px-4 p-2">
            <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
 
            {data?.map(stg=>

                    <StagiaireCard
                     nom={stg.nom} 
                     prenom = {stg.prenom} 
                     ville = {stg.Ville}
                     filiere= {stg.Fil}
                     image_src = {stg.photo}
                     id = {stg.id}
                      />


            )} 


        </div>
        </div>



    )



}