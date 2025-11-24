import './app.css'
import { useState ,useEffect } from 'react';

function App() {

  const [genre , setGenre] = useState(null)
  const [taille , setTaille] = useState(150) 
  const [error , setError] = useState('')
  const [poids , setPoids] = useState('')

  const selected = (e)=>{
    console.log(e.target.value)
      setGenre(e.target.value)
  }

  //   Hommes : Poids idéal = (Taille en cm - 100) - [(Taille en cm - 150) / 4]
  // Femmes : Poids idéal = (Taille en cm - 100) - [(Taille en cm - 150) / 2] 

  const calculer_poids  = (e)=>{
    e.preventDefault()

    const taille_nb = Number(taille)
    if (genre==="hm"){

      setPoids(`Poids idéal est :  ${ (taille_nb - 100) -  ( (taille - 150 ) / 4)} `)

    }else{
      setPoids(`Poids idéal est :  ${ (taille_nb - 100) -  ( (taille - 150 ) / 2)} `)
    }
  }

  function isNumericString(str) {
    return /^-?\d+(\.\d+)?$/.test(str);
  }

  useEffect(()=>{
        if(!isNumericString(taille)){
            setError('Error : saisir un numéro valide')
            return 
        }

        if(Number(taille)  < 150 ){
        setError('Alter : la taille doit etre supérieure a 150')
          return 
        }

        setError('')


  },[taille])

  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center gap-4">

        <form >
            <div  className="flex flex-col gap-4"  >
            <label>Taile en CM</label>
            <div className='flex'>
            <input 
            value={taille}
            onChange={e=>setTaille(e.target.value)}
            type="number" step={0.01} />
            <h3 className='flex ustify-center items-center p-2 bg-white border-s border-black'>Cm</h3>
            </div>
            {
              error && (
                <p className={`${error.toLowerCase().includes('alter') ? "bg-yellow-900 " : "bg-red-800" } text-white w-full p-3`}>{error}</p>
              )
            }
            <label>Genre </label>
            <select  defaultValue='null' onChange={selected}>
              <option  selected value =  "null"   >Choississez le genre </option>
              <option value='fm' >Femme</option>
              <option value='hm' >Homme</option>
            </select>
            <label>Poids idéal</label>
            <input type="text" readOnly={true} value={poids} />
            <button 
            disabled={error.length>0  || genre==="null" ? true : false}
            className='bg-yellow-800 text-black py-2 px-4  hover:bg-yellow-600'
            type="submit" onClick={calculer_poids}>Calculer  </button>

          </div>
        </form>

        <div className='border  border-black p-2 flex items-center justify-center'>
          {

            genre==="null" ? (

                  <h1 className='font-bold text-6xl'>?</h1>

            ):(

                genre==="fm"
                ?(

                  <img src='./businesswoman.png' alt="homme icon" className='w-32 h-32'  ></img>

                ):(

                    <img src='./icons8-homme-60.png' alt="homme icon" className='w-32 h-32'  ></img>

                )
            )
          }

        </div>

    </div>
  );  
}

export default App;
