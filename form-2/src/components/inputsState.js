import { useState } from "react";


export function InputsState(){

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
        {
          inputId : "gender",
          errorShow :false,  
          inputValue : ""

        },
        {
          inputId:"interests",
          errorShow :false,  
          inputValue:[]
        },
        {
          inputId : "country",
          errorShow :false,   
          inputValue : ""
        }

      ]
    )


    return{Inputs_info,setInputs_info}


}