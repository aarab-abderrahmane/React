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
import { Button } from "./ui/button"


export function AlertConfrim({showConfirm, setshowConfirm,confirmDelete}) {
  return (
    <Dialog  open={showConfirm} onOpenChange={setshowConfirm} >
      <form>

        <DialogContent className="max-w-[85vw] max-w-[450px]  flex flex-col overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>Clear Everything ⚠️</DialogTitle>
            <DialogDescription>
              You are about to delete all your todos and reset the application to its initial state. All your progress will be lost.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-red-700 text-white border-red-950 " onClick={confirmDelete}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
