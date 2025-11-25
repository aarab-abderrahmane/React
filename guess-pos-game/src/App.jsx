import { Grid } from "./Grid"
import { useState , useEffect } from "react"
import { RotatingText } from "./components/ui/shadcn-io/rotating-text"
import {ConfettiButton} from './components/ui/confetti-button'

import './index.css'
function App() {
  
  const size = 5

  const [monsterPos , setMonsterPos] = useState({})

  const [attempts , setAttempts] = useState(10)

  const [win , setWin] = useState(false)

  function generatePos(){
    const XM = Math.floor(Math.random()*size) 
    const YM = Math.floor(Math.random()*size) 

    setMonsterPos({XM, YM})
  }
  
  useEffect(()=>{

    generatePos()

  },[size])

    const handleClick  = (cell)=>{
        setWin(false)

      const {x, y} = cell
      const {XM , YM } = monsterPos
      if( x===XM && y === YM){

        setWin(true)
        setAttempts(10)
        generatePos()

        return
      }

      if(attempts===1){
        alert('you lose ')
        setAttempts(10)
        return
      }

      setAttempts(prev=>prev-1)

  }

  console.log(monsterPos)
  return (
    <div className="h-screen bg-gray-950 flex items-center  justify-center gap-40">
        <RotatingText
          className="text-7xl font-semibold text-white  " 
          text={[attempts]}
        />
        <Grid
         size={size} 
         monsterPos={monsterPos}
         handleClick={handleClick }
          />

          {

            win && (
                <ConfettiButton
                    
                confettiOptions={{
                  particleCount: 100,
                  spread: 70
                }}
                className="absolute top-1/2 left-1/2 z-30"
              >
              </ConfettiButton>
            )
          }


    </div>
  )
}

export default App
