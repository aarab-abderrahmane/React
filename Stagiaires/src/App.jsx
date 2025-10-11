import { useState ,useEffect,createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Header from './component/header'
import Home from './component/Home'
import ListStagiares from './component/ListStagiaires'
import Error from './component/Error'
import  useStagiaireActions from './component/functions'
import EditStagiaire from './component/EditStagiaire'

export const StagiaireContext = createContext([])


function App() {

  const [stagiaires , setStagiaires] = useState([])
  const [sCheckbox,setsCheckbox] = useState({checkAll:false})
  const [error,setError] = useState('')
  
  
  useEffect(()=>{

      const fetchData = async()=>{

          try{
            
            const response = await fetch('/Data.json')
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
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
      <StagiaireContext.Provider  value={{stagiaires,setStagiaires,useStagiaireActions,sCheckbox,setsCheckbox,error}}>
                <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/listStagiaires"  >
                  <Route  path="" element={<ListStagiares />} />
                  <Route path=":id" element={<EditStagiaire/>}   />
              </Route>
              <Route path="*" element={<Error/>} />
            </Routes>

        </BrowserRouter>
      </StagiaireContext.Provider>
  )


}




export default App
