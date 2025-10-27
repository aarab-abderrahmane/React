import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

import { useContext} from "react"
import {todosContext} from './TodoList'
import {PreferencesContext} from '../App'
import {Trash2Icon} from './ui/icons/Trash2Icon'
import { CodeXmlIcon  } from './ui/icons/CodeXmlIcon'






export function Preferences({showPreferences,setShowPreferences}) {

  const { PreferencesSettings, applyTheme } = useContext(PreferencesContext);


  const {buttons,setButtons} = useContext(todosContext)

  // const[LocalData,setLocalData] = useState({buttons:buttons,themes:PreferencesSettings})

  function toggleButton(buttonkey){

        setButtons(prev=>({

            ...prev,
              [buttonkey]:{
                  ...prev[buttonkey],
                  active:!prev[buttonkey].active
              }
            
       
        }))
        

  }





  return (
    <Dialog open={showPreferences} onOpenChange={()=>{
      setShowPreferences(prev=>!prev)
      // setLocalData(buttons)
      }}>
      <form>

        <DialogContent className="max-w-[80vw] backdrop-blur-md border-2 bg-white/60 rounded-3xl   md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] flex flex-col overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>Preferences</DialogTitle>
            <DialogDescription>
              Customize your experience and application settings to suit your workflow.
            </DialogDescription>
          </DialogHeader>


          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Button Visibility Preferences</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">

            <div className="w-full flex justify-center ">
                <div className=" bg-white/50 h-[55px] max-w-[400px] w-[80%] rounded-xl flex items-center justify-between px-4 border border-black">
                    <p >Todo List</p>
                    <div className="flex justify-end flex-1 h-full pe-4  ">
                        < Trash2Icon  size={25} duration={0.5}  class={` border-l border-black w-[50px] p-2 flex items-center  justify-center ${buttons.buttonDelete.active ? buttons.buttonDelete.color : "bg-transparent"}`} onClick={()=>toggleButton('buttonDelete')} />    
                        < CodeXmlIcon  size={25} duration={0.5}  class={` border-l border-r border-black w-[50px] p-2 flex items-center  justify-center ${buttons.buttonEdit.active ? buttons.buttonEdit.color : "bg-transparent"}`} onClick={()=>toggleButton('buttonEdit')} />    
                    </div>
                    <div className="w-[25px] h-[25px] border-2 border-black rounded-md"></div>
                </div>
            </div>
            
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" >
        <AccordionTrigger>Theme Preferences</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">

            <div className="flex justify-center gap-3 " >

                
                {Object.keys(PreferencesSettings.themes)?.map((key,index)=>{ 
                    const colorInfo = PreferencesSettings.themes[key]

                    return key!=="default"? ( 
                      <div key={index}
                       className={`w-[40px] h-[40px]
                        bg-[${colorInfo['--color-button']}] 
                        rounded-full hover:border-2 
                        ${PreferencesSettings.theme_name===key ? "border-2" : "" } 
                        border-[var(--color-primary)]
                        
                        `} onClick={PreferencesSettings.theme_name===key ? undefined : ()=>applyTheme(key) }   >

                       </div> 

                    )  : ""
                    
                  })}

                  <button className="bg-[var(--color-button)] rounded-xl text-[var(--color-text)] border-[var(--color-text)] w-[80px] border-2" onClick={()=>applyTheme('default')}>Reset</button>

            </div>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>Display Preferences</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">



        </AccordionContent>
      </AccordionItem>
    </Accordion>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="default">Back</Button>
            </DialogClose>
            <Button type="submit" variant="danger" onClick={()=>{setShowPreferences(false)}}>Reset ALL</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
