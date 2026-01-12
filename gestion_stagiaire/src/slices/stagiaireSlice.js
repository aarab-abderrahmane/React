import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStagiaires = createAsyncThunk(
    'stagiaires/fetchStagiaires',
    async ()=>{
        
        const response = await fetch('/stagiaire_data.json')
        const data = await response.json()

        console.log(data)
        return data.map((stg,idx)=>({...stg, id : idx}))
    }
)

const applyFilters = (state)=>{

    state.filtredStagiaire = state.stagiaires.filter(stg=>{


        const villeMatch = state.filtred.ville==="all" ||
            stg.Ville === state.filtred.ville
    

        const filiereMatch = state.filtred.filiere==="all" ||
            stg.Fil === state.filtred.filiere



        return filiereMatch && villeMatch


    })


}

const StagiaireSlice = createSlice({

    name : "stagiaires",
    initialState : {
        stagiaires : [],
        filtredStagiaire : [],
        loading : false ,
        error : null ,  
        filtred : {

            ville : 'all',
            filiere : "all",

        }
    },
    reducers:{

        deleteStagiaire : (state , action)=>{
            state.stagiaires =  state.stagiaires.filter(stg=>stg.id !== action.payload)
            applyFilters(state)
        },

        resetStagiaire : (state , action)=>{
            state.stagiaires = action.payload
            applyFilters(state)
        }

    },
    extraReducers : (builder)=>{
        builder
            .addCase(fetchStagiaires.pending  , (state)=>{
                    state.loading = true;
                    state.error = null 
            })

            .addCase(fetchStagiaires.fulfilled , (state , action)=>{
                state.loading = false ; 
                state.stagiaires = action.payload ; 
                applyFilters(state)
            })

            .addCase(fetchStagiaires.rejected , (state ,action)=>{
                state.loading = false ; 
                state.error = action.error.message
            })
    }

})



// export const {}

export const { deleteStagiaire ,  resetStagiaire  } = StagiaireSlice.actions

export default StagiaireSlice.reducer