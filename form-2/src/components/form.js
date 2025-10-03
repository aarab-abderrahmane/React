import Input from "./Input";
import Gender from './gender'
import Interests from './Interests'
import Country from './country'
import { useContext } from "react";
import { InputContext } from "./InputContext";








function Form() {

  const {Inputs_info,setInputs_info}= useContext(InputContext)

  function SumbitClick(e){

    e.preventDefault()


    let isAllComplete = []
    const  newInputState = Inputs_info.map((input,index)=>{


          if(['name','pwd',"email"].includes(input.inputId)){

              if(!(input.regex).test(input.inputValue)){

                  isAllComplete.push(input.errorMes)

                  return ({...input,errorShow:true})

              }

              return {...input,errorShow:false}

          }

          return input

    })


    setInputs_info(newInputState)


  }

  return (
    <div className="container mt-5 p-4"  onSubmit={SumbitClick}>
      <h2 className="mb-4">Formulaire d'inscription</h2>
      <form id="myForm" novalidate>
        <Input InputId={"name"} />
        <Input InputId={"email"} />
        <Input InputId={"pwd"} />

        {/* <!-- Gender --> */}
        <Gender/>

        {/* <!-- Centres d’intérêt --> */}
        <div className="mb-3">
          <label className="form-label">Centres d’intérêt</label>
          <br />

          <Interests  checkboxName='Sport'/> 
          <Interests  checkboxName='Lecture'/> 
          <Interests  checkboxName='Voyage'/> 
          <Interests  checkboxName='Programmation'/> 

          <div id="interetError" className="error"></div>
        </div>

        {/* <!-- Pays --> */}
        <Country/>

        {/* <!-- Bouton --> */}
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>

      </form>
    </div>
  );
}

export default Form;
