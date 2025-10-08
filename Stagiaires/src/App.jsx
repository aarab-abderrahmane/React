import { useState ,useEffect,createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Header from './component/header'
import Home from './component/Home'
import ListStagiares from './component/ListStagiaires'
import Error from './component/Error'

export const StagiaireContext = createContext()


function App() {

  const [statgiaires , setStagiaires] = useState([])
  const [error,setError] = useState('')
  
  useEffect(()=>{

      const fetchData = async()=>{

          try{
            
            const response = await fetch('/Data.json')
            if(!response){
              throw new Error('HTTP error! status : ',response.status) 
            }
            const result = await response.json()
            setStagiaires(result)


          }catch(error){
              setError(error)
          }

      }

      fetchData()


  },[])



  return (
      <StagiaireContext.Provider  value={{statgiaires,setStagiaires,error}}>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/listStagiaires" element={<ListStagiares />} />
              <Route path="*" element={<Error/>} />
            </Routes>

        </BrowserRouter>
      </StagiaireContext.Provider>
  )
}

export default App
