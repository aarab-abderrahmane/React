import { useContext } from "react"
import { InputContext } from "./InputContext"


export default function Interests ({checkboxName}){

    const {Inputs_info,handleChange}= useContext(InputContext)

    let interestsArray = Inputs_info.find(input => input.inputId === "interests").inputValue



    function updateInterests(e){

          const interest = e.target.value
          if(interestsArray.includes(interest)){

          interestsArray =  interestsArray.filter(intr=>intr!==interest)

          }else{
              interestsArray.push(interest)
          }

          handleChange({target:{value:interestsArray}},"interests")
    }

    return (

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="interets"
              value={checkboxName}
              onChange={(e)=>updateInterests(e)}
            />
            <label className="form-check-label">{checkboxName}</label>
          </div>


    )

}