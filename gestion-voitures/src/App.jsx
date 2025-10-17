import { BrowserRouter,Routes,Route } from "react-router"
import Composant1 from './components/Composant1'
import Composant2 from './components/Composant2'
import {SalarieProvider} from './components/SalarieContext'

function App() {


  return (

    <SalarieProvider>
          <BrowserRouter>

                <Routes>

                          <Route path="/Composant1" element={<Composant1/>}></Route>
                          <Route path="/Composant2" element={<Composant2/>}></Route>

                </Routes>

          </BrowserRouter>

         
    </SalarieProvider>




  )
}

export default App
