import { InputContext } from "./InputContext"
import { useContext } from "react"


export default function Country(){

    const {Inputs_info,handleChange}= useContext(InputContext)
    const targetInput =  Inputs_info.find(input=>input.inputId === "country")

    return (

        <div className="mb-3">
          <label for="pays" className="form-label">
            Pays
          </label>
          <select className="form-select" id="pays" name="pays" value={targetInput.inputValue} onChange={(e)=>handleChange(e,'country')} required>
            <option value="">--Choisir un pays--</option>
            <option value="France">France</option>
            <option value="Maroc">Maroc</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Sénégal">Sénégal</option>

          </select>
          <div className="invalid-feedback ">Veuillez sélectionner un pays.</div>
        </div>


    )
}