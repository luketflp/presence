"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface RegisterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Register({ open, onOpenChange }: RegisterModalProps) {
  return (  
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-[#111] max-w-[400px] text-black dark:text-white">
        <DialogTitle className="text-xl font-bold mb-4">Create account</DialogTitle>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Full-Names</Label>
            <Input 
              id="username" 
              type="text" 
              placeholder="Your Name" 
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500" 
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500" 
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Your Password" 
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500" 
            />
          </div>
          <div>
            <Label htmlFor="telephone">Phone Number</Label>
            <Input 
              id="telephone" 
              type="tel" 
              placeholder="Phone Number" 
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500" 
            />
          </div>
          <Button className="w-full mt-4">Register</Button>

          <p className="text-sm text-center mt-2 text-muted-foreground">
            <Button    
              variant="link"
              className="text-sm text-center mt-2 w-full text-muted-foreground"
              onClick={() => onOpenChange(false)}
            >
              Have an account? Log in
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Register
