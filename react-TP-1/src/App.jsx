import Counter from './component/Ques1'
import AutoFocusInput from './component/Ques2'
import UserList  from './component/Ques3'
import Timer from './component/Ques6'

import Statgiaire from './component/Ques7/Stagiaire'
import { BackgroundGradientAnimation } from "./component/ui/background-gradient-animation";


function App() {

  return (
    <BackgroundGradientAnimation>
            <div id="container" className = "  absolute z-999 min-h-screen w-[100vw] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 grid-rows-4">

                {/* <Counter /> */}

                {/* <AutoFocusInput /> */}
                {/* <Timer /> */}
      {/* 
                <UserList /> */}
                < >
                   <Statgiaire />
                </>

          </div>
    </BackgroundGradientAnimation>
  )
}

export default App
