import { useContext } from "react"
import { InputContext } from "./InputContext"

export default function Gender(){

    const {Inputs_info,handleChange}= useContext(InputContext)
    const tagret_input = Inputs_info.find(input=>input.inputId === "gender")

    return (

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <br></br>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="homme"
              value="Homme"
              checked={tagret_input.inputValue === "Homme"}
              onChange ={(e)=>handleChange(e,"gender")}
              required
            />
            <label className="form-check-label" for="homme">
              Homme
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="femme"
              checked={tagret_input.inputValue === "Femme"}
              onChange ={(e)=>handleChange(e,"gender")}
              value="Femme"
            />
            <label className="form-check-label" for="femme">
              Femme
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="autre"
              checked={tagret_input.inputValue ==="Autre"}
              onChange ={(e)=>handleChange(e,"gender")}
              value="Autre"
            />
            <label className="form-check-label" for="autre">
              Autre
            </label>
          </div>
          <div className="invalid-feedback "  style={{display:tagret_input.errorShow ? "block" : "none"}}>
            Veuillez sélectionner un genre.
          </div>
        </div>
    )
}