"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Login({ open, onOpenChange }: LoginModalProps) {
  return (  
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-[#111] max-w-[400px] text-black dark:text-white">

   


        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="text-black dark:text-white focus:border-gray-500  focus:ring-gray-500" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" className="text-black dark:text-white focus:ring-gray-500  focus:border-gray-500 " />
          </div>
          <Button className="w-full mt-4">Login</Button>


          <p className="text-sm text-center mt-2 text-muted-foreground">
             
             <Button    
            variant="link"
            className="text-sm text-center mt-2 w-full text-muted-foreground"
            onClick={() => console.log("Signup now")}
          >
           not a member? {"Signup now "}
          </Button>
          </p>


         
          <Button
            variant="link"
            className="text-sm text-center mt-2 w-full text-muted-foreground"
            onClick={() => console.log("Forgot password clicked")}
          >
            Forgot your password?
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Login