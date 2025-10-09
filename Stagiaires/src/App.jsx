import { useState ,useEffect,createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Header from './component/header'
import Home from './component/Home'
import ListStagiares from './component/ListStagiaires'
import Error from './component/Error'
import  useStagiaireActions from './component/functions'

export const StagiaireContext = createContext()


function App() {

  const [statgiaires , setStagiaires] = useState([])
  const [sCheckbox,setsCheckbox] = useState()
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


  useEffect(() => {
    if (statgiaires) {
      let Checkboxs = Object.fromEntries(statgiaires.map(s => ([s.id,false])));
      Checkboxs = {...Checkboxs,checkAll:false}
      setsCheckbox(Checkboxs);
    }
  }, [statgiaires]);
  



  return (
      <StagiaireContext.Provider  value={{statgiaires,setStagiaires,useStagiaireActions,sCheckbox,setsCheckbox,error}}>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/listStagiaires"  >
                  <Route  path="" element={<ListStagiares />} />
                  {/* <Route path="/edit/:id" /> */}
              </Route>
              <Route path="*" element={<Error/>} />
            </Routes>

        </BrowserRouter>
      </StagiaireContext.Provider>
  )
}

export default App
