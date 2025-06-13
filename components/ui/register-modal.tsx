"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
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
      <DialogContent className="bg-white dark:bg-black text-black dark:text-white max-w-[400px] rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Create your account</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              className="text-black dark:text-white focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="text-black dark:text-white focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="text-black dark:text-white focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="text-black dark:text-white focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <Button className="w-full mt-4">Register</Button>

          <div className="text-sm text-center mt-2 w-full text-muted-foreground">
            Already have an account?{" "}
            <button
              className="no-underline hover:underline hover:text-foreground"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Register
