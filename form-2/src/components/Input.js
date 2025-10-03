import { useContext } from "react";
import { InputContext } from "./InputContext";

export default function Input({ InputId }) {

  const {Inputs_info,handleChange}= useContext(InputContext)


  if (InputId === "name" || InputId === "email" || InputId === "pwd") {
    const target_input = Inputs_info.find((inp) => inp.inputId === InputId);
    return (
      <div className="mb-3">
        <label for="name" className="form-label">
          {target_input.inputName}
        </label>

        <div className="input-group">
          <span className="input-group-text bg-white">
            {target_input.icon}
          </span>
          <input
            type="text"
            className="form-control"
            id="inputX"
            placeholder="Type something..."
            value ={target_input.inputValue}
            onChange={(e)=>handleChange(e,InputId)}
            required
          />
        </div>
    <div className="invalid-feedback  " style={{display:target_input.errorShow ? "block" : ""}}>{target_input.errorMes }</div>
      </div>
    );
  } else {
    return "";
  }
}
