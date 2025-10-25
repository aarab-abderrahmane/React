import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
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

export default function DropdownMenuLabo() {
  
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

  function resetStorage() {
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify([]));
    window.location.reload();
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="default" aria-label="Open menu" size="icon-lg ">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 " align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-red-500" onSelect={resetStorage}>
              Reset
            </DropdownMenuItem>
            <DropdownMenuItem  disabled={todos.length>0 ? false : true} onSelect={() => setOpenDialog(true)}>
              Export
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openDialog} onOpenChange={setOpenDialog} >
        <form>
          <DialogContent className="sm:max-w-[425px]">
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
