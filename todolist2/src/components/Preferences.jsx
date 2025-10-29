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
import { Label } from "./ui/label"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

import { useContext} from "react"
import {PreferencesContext} from '../App'
import {Trash2Icon} from './ui/icons/Trash2Icon'
import { CodeXmlIcon  } from './ui/icons/CodeXmlIcon'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip"


import { Switch } from "./ui/switch"

import { Slider } from "./ui/slider"

import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

import { useState } from "react"

export function Preferences({showPreferences,setShowPreferences}) {

  const { PreferencesSettings,setPreferencesSettings, applyTheme,ToggleCursor  } = useContext(PreferencesContext);

  let ButtonsState = PreferencesSettings.buttons

  function toggleButton(buttonkey){
        console.log("hello worl")
        setPreferencesSettings(prev=>({

            ...prev,
            buttons:{
              ...prev.buttons,
              [buttonkey]:{
                  ...prev.buttons[buttonkey],
                  active:!prev.buttons[buttonkey].active
              }
            }
       
        }))
        

  }


  
  const [isOpen, setIsOpen] = useState(false)

  





  return (
    <Dialog open={showPreferences} onOpenChange={()=>{
      setShowPreferences(prev=>!prev)
      // setLocalData(buttons)
      }}>
      <form>

        <DialogContent className="max-w-[80vw] backdrop-blur-md border-2 bg-white/60 rounded-3xl   md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]   flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Preferences</DialogTitle>
            <DialogDescription>
              Customize your experience and application settings to suit your workflow.
            </DialogDescription>
          </DialogHeader>


          <div className="max-h-[400px] overflow-x-hidden overflow-y-scroll p-4">

          <Accordion
      type="single"
      collapsible
      className="w-full "
      defaultValue="item-1"
    >
      <AccordionItem value="item-4">
        <AccordionTrigger  >Button Visibility Preferences</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance"> 

            <div className="w-full flex justify-center ">
                <div className=" bg-white/50 h-[55px] max-w-[400px] w-[80%] rounded-xl flex items-center justify-between px-4 border border-black">
                    <p >Todo List</p>
                    <div className="flex justify-end flex-1 h-full pe-4  ">
                        < Trash2Icon  size={25} duration={0.5}  class={` border-l border-black text-[var(--color-text)] w-[50px] p-2 flex items-center  justify-center ${ButtonsState.buttonDelete.active ? "bg-[var(--color-background)]" : "bg-transparent"}`} onClick={()=>toggleButton('buttonDelete')} />    
                        < CodeXmlIcon  size={25} duration={0.5}  class={` border-l border-r border-black text-[var(--color-text)] w-[50px] p-2 flex items-center  justify-center ${ButtonsState.buttonEdit.active ? "bg-[var(--color-background)]" : "bg-transparent"}`} onClick={()=>toggleButton('buttonEdit')} />    
                    </div>
                    <div className="w-[25px] h-[25px] border-2 border-black rounded-md"></div>
                </div>
            </div>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" >
          <AccordionTrigger>Theme Preferences</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">

              <div className="flex justify-center gap-3 flex-wrap sm:flex-nowrap" >

                  
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


        <AccordionItem value="item-3"   >
          <AccordionTrigger>Custome Cursor</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">

              <div  className="flex justify-center items-center gap-3 flex-col md:flex-row">
                  <Tooltip>
                    <TooltipTrigger>

                    <div 
                    onClick={()=>ToggleCursor('smooth')}
                    className={`w-[140px] h-[140px] ${PreferencesSettings.cursorType==="smooth" ? "bg-[var(--color-button)]" :"" }  flex flex-col justify-center items-center gap-3 border-2 border-[var(--color-text)] rounded-3xl hover:cursor-pointer `}>
                          
                          <i class="bi bi-cursor-fill text-lg bg-white border-[var(--color-text)] flex items-center justify-center w-[40px] h-[40px] rounded-full border-2"></i>

                          <p className="p-2">Smooth cursor</p>

                    </div>

                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Slow, fluid cursor animation</p>
                    </TooltipContent>
                  </Tooltip>


                    
                    <Tooltip>
                      <TooltipTrigger>

                          <div 
                          onClick={()=>ToggleCursor('default')}
                          className={`w-[140px] h-[140px] ${PreferencesSettings.cursorType==="default" ? "bg-[var(--color-button)]" :"" }  flex flex-col justify-center items-center gap-3 border-2 border-[var(--color-text)] rounded-3xl hover:cursor-pointer `}>
                                
                                <i class="bi bi-ban text-lg bg-white border-[var(--color-text)] flex items-center justify-center w-[40px] h-[40px] rounded-full border-2"></i>

                                <p className="p-2  text-center">browser cursor</p>

                          </div>

                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Normal system cursor</p>
                      </TooltipContent>
                    </Tooltip>





              </div>

        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-1"  >
        <AccordionTrigger>General</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
                  

                  
              <div  className="h-[150px] flex flex-col gap-6 ">
                    


                      <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="flex w-full flex-col gap-2"
                      >
                        <div className="flex items-center gap-12 px-4">
                          <h4 className="text-sm font-semibold">
                            Costume Text :
                          </h4>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                              <ChevronsUpDown />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <div className=" px-4 py-2  text-sm">

                          <div className="flex items-center space-x-2">
                                      <Switch 
                                      id="airplane-mode" 
                                      className="bg-gray-400"
                                      checked={PreferencesSettings.general.hideTexts}
                                      onCheckedChange={(checked) => setPreferencesSettings(prev => ({
                                          ...prev,
                                          general: { ...prev.general, hideTexts: checked }
                                        }))}

                                      />
                                      <Label htmlFor="airplane-mode">Hide the texts.</Label>
                                    </div>
                        </div>
                        <CollapsibleContent className="flex flex-col gap-2 w-full ">
                          <div className=" px-4 py-2  text-sm">
                            {!PreferencesSettings.general.hideTexts && (
                                          <div className="flex items-center gap-4">
                                            <p>Opacity (Text) : </p>
                                            <Slider
                                              defaultValue={[PreferencesSettings.general.opacityTexts]}
                                              min={0}
                                              max={100}
                                              step={10}
                                              onValueChange={(value) =>
                                                setPreferencesSettings((prev) => ({
                                                  ...prev,
                                                  general: { ...prev.general, opacityTexts: value[0] },
                                                }))
                                              }
                                              className="bg-gray-400 max-w-[300px] w-[80vw] rounded-full mx-2"
                                            />

                                          </div>
                                    )}
                          </div>
                        
                        </CollapsibleContent>
                      </Collapsible>
                  

              </div>

        </AccordionContent>
      </AccordionItem>


          </Accordion>
            
          </div>


          <DialogFooter className="">
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
