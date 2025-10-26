import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { useState, useContext } from "react"; // Add useContext
import { todosContext } from "./TodoList"; // Import the context

import CodeBlockDemo from "./CodeBlockDemo";
import {AlertConfrim} from './AlertConfirm';
import {Preferences} from './Preferences'


export default function DropdownMenuLabo() {
  
  const[showPreferences , setShowPreferences] = useState(false)
  const [showConfirm , setshowConfirm] = useState(false)

  function resetStorage() {
    localStorage.setItem("todos", JSON.stringify([]));
    window.location.reload();
  }


  const { todos } = useContext(todosContext);
  

  const Code = `
  [

    ${todos?.map(item => JSON.stringify(item)).join(',\n')} 

  ]`

  function downloadTodos(){
    if(!todos || todos.length<1){
        alert('No todos found in localStorage!')
        return 
    }

    try{

        const jsonString = JSON.stringify(todos, null, 2);

        // Create download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create filename with timestamp
        const now = new Date();
        const timestamp = now.toISOString().replace(/[:.]/g, '-');
        const filename = `todos-export-${timestamp}.json`;

        // Trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

    }catch(error){
        console.error(error)
    }

  }

  const [openDialog, setOpenDialog] = useState(false);



  return (
    <>
      <DropdownMenu modal={false} >
        <DropdownMenuTrigger asChild>
          <Button variant="default" aria-label="Open menu" size="icon-lg ">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[80vw] lg:w-[50vw] max-w-[300px] rounded-xl border-2 border-[var(--color-text)]  " align="end" >
          <DropdownMenuLabel className="p-3 bg-[var(--color-primary)] text-white" >Actions</DropdownMenuLabel>
          <DropdownMenuGroup className="">
            <DropdownMenuSeparator className='h-[2px] bg-[var(--color-text)]'/>

            <DropdownMenuItem className="text-red-500 p-3 font-bold focus:bg-red-200  " onSelect={()=>setshowConfirm(true)}>
              Reset
            </DropdownMenuItem>
            <DropdownMenuSeparator className='font-bold h-[1px] bg-[var(--color-text)]'/>
            <DropdownMenuItem className="p-3" disabled={todos.length>0 ? false : true} onSelect={()=>setOpenDialog(true)}>
              Export
            </DropdownMenuItem>
            <DropdownMenuSeparator  className='font-bold h-[1px] bg-[var(--color-text)]' />
            <DropdownMenuItem className="p-3" onSelect={()=>setShowPreferences(true)}>
              Preferences
            </DropdownMenuItem>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>


      <Preferences showPreferences={showPreferences} setShowPreferences={setShowPreferences}/>

      <AlertConfrim showConfirm={showConfirm} setshowConfirm={setshowConfirm} confirmDelete={resetStorage}  />

      <Dialog open={openDialog} onOpenChange={setOpenDialog} >
        <form>
          <DialogContent className=" backdrop-blur-md border-2 bg-white/60 rounded-3xl max-w-[80vw]  md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] flex flex-col overflow-x-hidden">
            <DialogHeader>
              <DialogTitle>Export Data</DialogTitle>
              <DialogDescription>
                Copy your Data OR Download it :
              </DialogDescription>
            </DialogHeader>

            <div>
                <div >
                <CodeBlockDemo code={Code} language="json"  />
                </div>
            </div>




            <DialogFooter className=" w-full flex flex-col md:flex-row">
              <DialogClose asChild>
                <Button variant="danger">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="secondary" onClick={downloadTodos}>
                Download JSON
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>


    </>
  );
}
