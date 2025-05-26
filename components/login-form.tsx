"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { SuccessPopup } from "./success-popup"
import Link from "next/link"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Login data:", data)

      // Store user email and show success popup
      setUserEmail(data.email)
      setShowSuccessPopup(true)
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">LOG IN</h1>
          <p className="text-xl text-white/90">Welcome back to your lottery journey</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-slate-700 font-semibold flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>E-mail</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="password" className="text-slate-700 font-semibold flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Password</span>
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className="h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 transition-colors pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rememberMe" onCheckedChange={(checked) => setValue("rememberMe", checked as boolean)} />
                  <Label htmlFor="rememberMe" className="text-slate-700 text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Forgot password?
                </Link>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="agreeToTerms" />
                <Label htmlFor="agreeToTerms" className="text-slate-700 text-sm leading-relaxed">
                  I agree with the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                    politicians ozbigwinaustralia.com
                  </Link>{" "}
                  and data processing for my inquiry
                </Label>
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="oz-button-primary text-xl px-16 py-4 w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-slate-600">
                  Don't have an account yet?{" "}
                  <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        type="login"
        userEmail={userEmail}
      />
    </>
  )
}
