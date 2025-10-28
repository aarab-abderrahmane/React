import {TodoList}  from "./components/TodoList"
import {useState,createContext,useEffect} from 'react'
import * as React from "react"
import { SmoothCursor } from "./components/ui/smooth-cursor"
import LiveClock from "./components/LiveClock"
import { Calendar } from "./components/ui/calendar";
import LiveClockDetailed from './components/LiveClockDetailed'
import { ToastContext } from "./ToastContext"
import { Toaster } from "./components/ui/sonner"


export  const PreferencesContext = createContext({})

function App() {


  const [calendarDate,setCalendarDate] = useState(new Date())
  const [PreferencesSettings,setPreferencesSettings] = useState(()=>{

      const saved = localStorage.getItem('Preferences');
      return saved && saved!==null && saved!==undefined 
      ? JSON.parse(saved) 
      :  {   theme_name:"default",
            themes: {
              red: {
                "--color-background": "#dc9090",
                "--color-text": "#460c0c",
                "--color-button": "#f84f4f"
              },
              blue: {
                "--color-background": "#90b5dc",
                "--color-text": "#0c2646",
                "--color-button": "#4f83f8"
              },
              yellow: {
                "--color-background": "#e6dc90",
                "--color-text": "#46400c",
                "--color-button": "#f8e14f"
              },
              green: {
                "--color-background": "#90dca4",
                "--color-text": "#0c4620",
                "--color-button": "#4ff86a"
              },
              purple: {
                "--color-background": "#b890dc",
                "--color-text": "#2a0c46",
                "--color-button": "#9b4ff8"
              },
              dark: {
                "--color-background": "#000000ff",
                "--color-text": "#ffffffff",
                "--color-button": "#000000ff"
              },
              default:{
                "--color-background": "#C6C7DC",
                "--color-text": "#645D7E",
                "--color-button": "#C6C7DC"
              },
         
              },
          buttons:{
            buttonDelete: { active: false, color: 'bg-[var(--color-primary-light)]' },
            buttonEdit: { active: true, color: 'bg-[var(--color-primary-light)]' },
          }
    
    
    }


  })


  useEffect(()=>{
      localStorage.setItem("Preferences",JSON.stringify(PreferencesSettings))
  },[PreferencesSettings])



  

    const applyTheme = (name) => {
      if(PreferencesSettings){

        const selected = PreferencesSettings.themes[name];
        Object.entries(selected).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
        setPreferencesSettings(prev => ({ ...prev, theme_name: name }));

        }

    };
  

  useEffect(()=>{
      applyTheme(PreferencesSettings.theme_name)

  },[])





  
  
  return (

    <PreferencesContext.Provider value={{PreferencesSettings,setPreferencesSettings,applyTheme}}>
    <SmoothCursor  />
      <ToastContext.Provider>
          
            <div className="absolute z[-999] flex flex-col jutify-center hidden xl:block text-[var(--color-text)]  overflow-hidden">
              <h1 className="text-[21vw] align-baseline inline-block  h-[50vh]  text-center w-full mt-[-70px]" style={{fontWeight: "700",fontStyle: "normal"}}>Tuesday</h1>
              <h1 className="text-[21vw] align-baseline inline-block h-[50vh] text-center w-full" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
            </div>
            

              <div className="flex flex-col  items-center mt-12 md:mt-0 xl:flex-row xl:justify-center w-[100vw]  gap-4 p-4 lg:p-8 min-h-screen overflow-y-scroll overflow-x-hidden  ">



                  {/* <!-- Left section --> */}
                    <div className="flex flex-col gap-3 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">

                    {/* <!-- Calendar --> */}
                    <div
                    class="glass   rounded-3xl !important shadow  flex flex-col md:flex-row items-center md:items-stretch lg:justify-between   w-full lg:h-[50vh] lg:max-h-[450px] overflow-hidden md:hover:scale-[1.03]"
                    style={{ padding: "2px" }}
                    >

                      <LiveClock/>

                      <div className="overflow-y-scroll w-full md:w-[55%] m-5  lg:h-[45vh] lg:max-h-[400px]">
                      <Calendar
                          mode="single"
                          selected={calendarDate}
                          onSelect={setCalendarDate}
                          className="  shadow-sm  w-full   md:pb-6  "
                          captionLayout="dropdown"
                      />
                      </div>

                    </div>
                    
                    
                    {/* <!-- Clock --> */}
                    <LiveClockDetailed />

                  </div>

                
                  {/* right section  */}
                    <TodoList />
                


            </div>

            <Toaster />
              
      </ToastContext.Provider>

    </PreferencesContext.Provider>
   
  )
}

export default App
