import { useState } from "react";
import { InputContext } from "./components/InputContext";
import Form from './components/form'

function App() {


  const [Inputs_info,setInputs_info] = useState(
    [
      {
        inputId:"name",
        inputName : "Full Name",
        regex : /^[A-Za-z]{3,30}$/,
        icon : <i class="bi bi-person"></i>,
        errorMes : "Veuillez entrer au moins 3 caractères (lettres et espaces uniquement).",
        errorShow:false,
        inputValue : ""
      },
      {
        inputId:"email",
        inputName : "Email",
        regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        icon : <i class="bi bi-envelope"></i>,
        errorMes : "Veuillez entrer une adresse email valide.",
        errorShow :false ,  
        inputValue : ""

      },
      {
        inputId:"pwd",
        inputName : "Password",
        regex : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        icon : <i class="bi bi-lock"></i>,
        errorMes : "Minimum 6 caractères, avec au moins : une majuscule, une minuscule, un chiffre et un caractère spécial.",
        errorShow :false,   
        inputValue : ""

      },

    ]
  )


    const handleChange = (e,targetId)=>{

        const newInputInfo =   Inputs_info.map(input=>{

            if (input.inputId===targetId){

              return ({...input,inputValue:e.target.value})
            }

            return input 

        })


        setInputs_info(newInputInfo)


    }


  return (
    <div className="App">
  <InputContext.Provider value={{Inputs_info,handleChange}}>
           <Form/>
      </InputContext.Provider>
    </div>
  );
}

export default App;
