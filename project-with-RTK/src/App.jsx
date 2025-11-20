
import { useSelector , useDispatch } from 'react-redux';

import {increment,decrement,restart,editBasedValue} from './counterSlice'

function App() {

  const state = useSelector(state =>  state.counter )

  const dispatch = useDispatch()


  console.log(dispatch)

  console.log(increment("hello"))


  return (
    <>
          <div>
            <h1>Value based on</h1>
            <input type="text"
            onChange={(e)=>dispatch(editBasedValue({newValue:Number(e.target.value)}))}
            value={state.basedValue}></input>
          </div>
           <p>{state.count_nb}</p>

           <button onClick={()=>dispatch(increment())}>increment</button>
           <button onClick={()=>dispatch(decrement())} >decrement</button>
           <button  onClick={()=>dispatch(restart())} >restart</button>
   
   
    </>
  )
}

export default App
