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
      <DialogContent className="bg-white text-black max-w-[400px] rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="text-black focus:ring-gray-500 focus:border-gray-500 focus:outline-none !ring-gray-500 !border-gray-500" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" className="text-black focus:ring-gray-500 focus:border-gray-500 focus:outline-none !ring-gray-500 !border-gray-500" />
          </div>
          <Button className="w-full mt-4">Login</Button>
          <p className="text-sm text-center mt-2 text-muted-foreground">
            Not a member? <a href="#" className="underline">Signup now</a>
          </p>

          {/* "Forgot your password?" button" */}
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