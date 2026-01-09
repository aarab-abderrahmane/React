import {  useState } from "react"

export function AjouterStagiaire({updateStagiaireData}){



    const defaultValues = {
        nom : "" , 
        prenom : "" ,
        filiere : ""  , 
        ville : ""  , 
        image : ""
    }
    const [formValues , setFormValues] = useState(defaultValues)


    const handleChange = (e)=>{

        if(e.target.name === "image"){
             const file = e.target.files[0]

            console.log(file)
            if(file){
                setFormValues(prev=>({...prev , image : file}))
                return 
            }
        }


        if(!e || e.target.value.trim().length===0) return ; 



        setFormValues(prev=>({...prev,[e.target.name] : e.target.value})) 

        console.log(formValues)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const isAllValid = Object.values(formValues).every(value => {
  return (typeof value === "string" && value.trim().length > 0) ||
         (value instanceof File); // files are valid
});

      
        if(isAllValid){
            
            setFormValues(defaultValues)
            updateStagiaireData(formValues)
        }

    }

    return (

        <form 
            onSubmit={handleSubmit}
            className="flex  flex-col bg-gray-400 border border-black m-4 p-2">

                <label>Nom : </label>
                <input 
                type="text" name="nom" value={formValues.nom} 
                onChange={handleChange}/>

                <label>prenom : </label>
                <input 
                type="text" name="prenom" value={formValues.prenom} 
                onChange={handleChange}/>


                <label>filiere : </label>
                <input 
                type="text" name="filiere" value={formValues.filiere} 
                onChange={handleChange}/>
                
                <br></br>

                <select value={formValues.ville} name="ville" onChange={handleChange}>
                    <option value={""}  >select Ville___</option>
                        {
                            ['Fes', "Tanger" , 'Casablanca' , "Rabat" , "Agadir", "Oujda"].map(
                                vil =>
                                    <option key={vil}  value={vil} >{vil}</option>
                                
                            )
                        }
                </select>

                        <br></br>
               <input 
               type = "file" 
               accept="image/*"
               name="image"
               onChange={handleChange}>
               </input>         

                 {
                    formValues.image && (
                         <div>
                            <p>Selected image:</p>
                            <img
                                src={URL.createObjectURL(formValues.image)}
                                alt="preview"
                                width={200}
                            />
                        </div>
                    )
                } 

                <br></br>
                <button type="submit" className="bg-green-700 text-green-200 py-2 ">Ajouter</button>
        </form>



    )


}