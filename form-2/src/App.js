import { InputContext } from "./components/InputContext";
import Form from './components/form'
import {InputsState} from './components/inputsState'
import Alert from './components/alert'

function App() {


    const {Inputs_info,setInputs_info} = InputsState()

    function handleChange (e,targetId){


        const newInputInfo =   Inputs_info.map(input=>{

            if (input.inputId===targetId){


                  return ({...input,inputValue:e.target.value})
            }

            return input 

        })


        setInputs_info(newInputInfo)


    }


  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <InputContext.Provider value={{Inputs_info,setInputs_info,handleChange}}>
           <Form/>
           <Alert/>
      </InputContext.Provider>
    </div>
  );
}

export default App;
