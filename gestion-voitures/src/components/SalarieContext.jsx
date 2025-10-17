import {createContext , useEffect , useState} from 'react'


export const SalarieContext = createContext()
export function SalarieProvider({children}){


    const [salarieData,setsalarieData] = useState([])

    useEffect(()=>{

        fetch('./salarieData.json')
            .then(response => response.json())
            .then(data=> setsalarieData(data))
            .catch(()=>setsalarieData([]))

    },[])


    


    return(

        <SalarieContext.Provider value={salarieData}>
                
               {children}

        </SalarieContext.Provider>

    )

}