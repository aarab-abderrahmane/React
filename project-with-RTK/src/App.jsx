import {Provider}   from 'react-redux';
import {store} from './store'


import { useDispatch } from 'react-redux';
import { increment } from './counterSlice';
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0)

  const count_nb = useSelector(state => state.counter.count_nb)


  return (
    <>
        <Provider store={store}>
                <p>
                  {count_nb}
                </p>
        </Provider>
    </>
  )
}

export default App
