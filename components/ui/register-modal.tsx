"use client"

import { useForm, Controller } from "react-hook-form"
import { InputMask } from "@react-input/mask"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface RegisterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  full_name: string
  email: string
  password: string
  telephone: string
}

export function Register({ open, onOpenChange }: RegisterModalProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { full_name: "", email: "", password: "", telephone: "" },
  })

  const onSubmit = async (data: FormData) => {
    console.log("Register payload:", data)
    // TODO: integrate your registration API call here
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-[#111] max-w-[400px] text-black dark:text-white">
        <DialogTitle className="text-xl font-bold mb-4">Create account</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <Label htmlFor="full_name">Full name</Label>
            <Input
              id="full_name"
              {...register("full_name", { required: "Full name is required" })}
              placeholder="Your Name"
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500"
            />
            {errors.full_name && (
              <p className="text-red-600 text-sm mt-1">{errors.full_name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="your@email.com"
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min length is 6" },
              })}
              placeholder="Your Password"
              className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Telephone with mask */}
          <div>
            <Label htmlFor="telephone">Phone Number</Label>
            <Controller
              name="telephone"
              control={control}
              rules={{ 
                required: "The phone number is required", 
                minLength: { value: 14, message: "Incomplete phone number" }
              }}
              render={({ field }) => (
                <InputMask
                  mask="+1 (___) ___-____"
                  replacement={{ _: /\d/ }}
                  {...field}
                  component={Input}
                  id="telephone"
                  placeholder="+1 (123) 456-7890"
                  className="text-black dark:text-white focus:border-gray-500 focus:ring-gray-500"
                />
              )}
            />
            {errors.telephone && (
              <p className="text-red-600 text-sm mt-1">{errors.telephone.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Registering…" : "Register"}
          </Button>

          {/* Switch to Login */}
          <p className="text-sm text-center mt-2 text-muted-foreground">
            <Button
              variant="link"
              className="text-sm w-full text-muted-foreground"
              onClick={() => onOpenChange(false)}
            >
              Have an account? Log in
            </Button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Register
