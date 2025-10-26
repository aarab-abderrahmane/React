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

import {useState, useContext} from "react"


import {todosContext} from './TodoList'


export function Preferences({showPreferences,setShowPreferences}) {

  const {buttons,setButtons} = useContext(todosContext)

  const[LocalData,setLocalData] = useState(buttons)

  function toggleButton(buttonkey){

        setLocalData(prev=>({

            ...prev,
            [buttonkey]:{
                ...prev[buttonkey],
                active:!prev[buttonkey].active
            }
       
        })
        )

  }


  return (
    <Dialog open={showPreferences} onOpenChange={()=>{
      setShowPreferences(prev=>!prev)
      setLocalData(buttons)
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
                        <i class={`bi bi-trash3 text-lg lg:text-xl border-l border-black w-[50px] p-2 flex items-center  justify-center ${LocalData.buttonDelete.active ? LocalData.buttonDelete.color : "bg-transparent"}`} onClick={()=>toggleButton('buttonDelete')}></i>
                        <i class={`bi bi-pencil text-lg lg:text-xl border-l border-r border-black w-[50px]  p-2 flex items-center justify-center  ${LocalData.buttonEdit.active ? LocalData.buttonEdit.color : "bg-transparent"} `} onClick={()=>toggleButton('buttonEdit')}></i>
                    </div>
                    <div className="w-[25px] h-[25px] border-2 border-black rounded-md"></div>
                </div>
            </div>
            
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Behavior Preferences</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">



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
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant="secondary" onClick={()=>{setButtons(LocalData) ; setShowPreferences(false)}}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
