import {UPDATE_INPUT_VALUE} from "../features/formSlice";
import { useSelector , useDispatch } from "react-redux";
import { useEffect , useState } from "react";
import styled from "styled-components"

import {ADD_STGIAIRE} from '../features/stagiaireSlice'

import {v4 as UUIDv4} from 'uuid'
import { Button } from "./Button";

import { Save ,RotateCcw } from "lucide-react";

export const InternForm = ({initialData=""})=>{

    const dispatch = useDispatch()

    const {fromReducer,stagiaireReducer} = useSelector(state=>state)
    const stagiaiesStates = stagiaireReducer
    const formStates = fromReducer

    //genrate unique key with uuid version 4
    const [stagiaireId , setStagiaireId] = useState("")
    useEffect(()=>{
            const Gen_stagiaireId = UUIDv4();
            setStagiaireId(Gen_stagiaireId)
    },[stagiaiesStates])

    

    const InputType = {
        id : "ID" , 
        mat : "MATRICULE" , 
        nom : "NOM", 
        ville : "VILLE" , 
        moy : "MOYENNE",
        code : "CODEPOSTAL"
    }

    const GetValue = (type)=>{
        const targetInput = formStates.find(input=>input.type===type)
        if(targetInput){

            return targetInput.value
        }
    }

    const handleChange = (e)=>{
            const inputType = InputType[e.target.name]
            const inputValue = e.target.value 
            dispatch(UPDATE_INPUT_VALUE({type:inputType , value : inputValue}))
    }



    const isFromFeildsValid = ()=>{
        return formStates.every(inp => inp.errorMes.length === 0)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        isFromFeildsValid() 
        ? dispatch(ADD_STGIAIRE({
            id : stagiaireId ,
            matricule : GetValue(InputType.mat),
            nom : GetValue(InputType.nom),
            ville : GetValue(InputType.ville),
            codePostal : GetValue(InputType.code),
            moyenne : GetValue(InputType.moy)
        }))
        : alert('Invalide content')
    
    }


    return(




        <div className="bg-[var(--bg-secondary)] noise rounded-3xl shadow-sm overflow-hidden sticky top-6 border border-dashed border-white/10">
      {/* <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
          {initialData ? <UserPlus className="w-5 h-5 text-primary-600" /> : <UserPlus className="w-5 h-5 text-emerald-600" />}
          {initialData ? 'Edit Intern' : 'New Intern'}
        </h3>
        {initialData && (
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        )}
      </div> */}

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        
        {/* Read Only Fields for context (Simulated) */}
        {/* {initialData && (
          <div className="grid grid-cols-2 gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">ID</label>
              <div className="font-mono text-sm text-[var(--text-color)]">{initialData.id}</div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">Matricule</label>
              <div className="font-mono text-sm text-[var(--text-color)]">{initialData.matricule}</div>
            </div>
          </div>
        )} */}

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-color)]">Nom</label>
            <input
              type="text" required
                name = "nom"
                value={GetValue(InputType.nom)}
                onChange={handleChange}
              placeholder="Doe"
              className={`w-full px-3 py-2 text-sm text-white rounded-xl focus:outline-none focus:ring-2 transition-all bg-black/70`}

            //   className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.lastName ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-primary-100 focus:border-primary-400'}`}
            />
            {/* {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>} */}
          </div>

          
        </div>



        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-color)]">Ville</label>
            <input
              name="ville"
                value={GetValue(InputType.ville)}
                onChange={handleChange}
              placeholder="Paris"
              className={`w-full px-3 py-2 text-sm text-white rounded-xl focus:outline-none focus:ring-2 transition-all bg-black/70`}

            //   className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.city ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-primary-100 focus:border-primary-400'}`}
            />
             {/* {errors.city && <p className="text-xs text-red-500">{errors.city}</p>} */}
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-color)]">Code Postal</label>
            <input
              name="code"
              value={GetValue(InputType.code)}
                onChange={handleChange}
              placeholder="75001"
              className="w-full px-3 py-2 text-sm text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 transition-all bg-black/70"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-color)]">Matricule</label>
            <input
              name="mat"
              value={GetValue(InputType.mat)}
                onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 transition-all bg-black/70"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-color)]">Moyenne (0-20)</label>
            <input
              type="number"
              name="moy"
              value={GetValue(InputType.moy)}
              onChange={handleChange}
              min="0"
              max="40"
              step="0.1"
              className="w-full px-3 py-2 text-sm   rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 transition-all bg-black/70 text-white"

            //   className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.averageScore ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-primary-100 focus:border-primary-400'}`}
            />
             {/* {errors.averageScore && <p className="text-xs text-red-500">{errors.averageScore}</p>} */}
          </div>
        </div>

        <div className="pt-4 flex gap-3">
          <Button 
            type="submit" 
            className="" 
            variant="primary"
            icon={<Save className="w-4 h-4" />}
            
          >
            {initialData ? 'UPDATE STAGIAIRE' : 'ADD STAGIAIRE'}
          </Button>
          
          {!initialData && (
            <Button 
              type="button" 
              variant="secondary" 
              // onClick={handleReset}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              RESET
            </Button>
          )}

          {initialData && (
             <Button 
             type="button" 
             variant="secondary" 
            //  onClick={onCancel}
           >
             Cancel
           </Button>
          )}
        </div>
      </form>
    </div>


    )


}


const Input = styled.input`

    border : 1px solid black; 


`