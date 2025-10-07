import Counter from './component/Ques1'
import AutoFocusInput from './component/Ques2'


function App() {

  return (
    <div className = "  min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

          <Counter />

          <AutoFocusInput />

    </div>
  )
}

export default App
