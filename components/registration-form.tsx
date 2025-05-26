"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, User, CreditCard, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { SuccessPopup } from "./success-popup"
import Link from "next/link"

const registrationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
  title: z.string().min(1, "Please select a title"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  birthName: z.string().optional(),
  zip: z.string().min(4, "Please enter a valid postal code"),
  location: z.string().min(2, "Please enter your city/location"),
  street: z.string().min(2, "Please enter your street address"),
  houseNumber: z.string().min(1, "Please enter your house number"),
  dateOfBirth: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Please enter date in MM/DD/YYYY format"),
  placeOfBirth: z.string().min(2, "Please enter your place of birth"),
  phone: z.string().regex(/^\+?[\d\s\-$$$$]{10,}$/, "Please enter a valid phone number"),
  iban: z.string().min(15, "Please enter a valid IBAN").max(34, "IBAN is too long"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

export function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Registration data:", data)

      // Store user email and show success popup
      setUserEmail(data.email)
      setShowSuccessPopup(true)
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">SIGN UP</h1>
          <p className="text-xl text-white/90">Join thousands of winners and start your lottery journey today</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Login Credentials */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-semibold flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>E-mail *</span>
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
                    <span>Password *</span>
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 transition-colors pr-12"
                      placeholder="Create a strong password"
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
              </div>

              {/* Account Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <User className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800">ACCOUNT</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="title" className="text-slate-700 font-semibold">
                      Title *
                    </Label>
                    <Select onValueChange={(value) => setValue("title", value)}>
                      <SelectTrigger className="mt-2 h-12 rounded-full border-2 border-slate-200">
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="firstName" className="text-slate-700 font-semibold">
                      First name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-slate-700 font-semibold">
                      Last name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="birthName" className="text-slate-700 font-semibold">
                      Birth name
                    </Label>
                    <Input
                      id="birthName"
                      {...register("birthName")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Birth name (if different)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zip" className="text-slate-700 font-semibold flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Zip *</span>
                    </Label>
                    <Input
                      id="zip"
                      {...register("zip")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Postal code"
                    />
                    {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-slate-700 font-semibold">
                      Location *
                    </Label>
                    <Input
                      id="location"
                      {...register("location")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="City/Location"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="street" className="text-slate-700 font-semibold">
                      Street *
                    </Label>
                    <Input
                      id="street"
                      {...register("street")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Street address"
                    />
                    {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="houseNumber" className="text-slate-700 font-semibold">
                      House number *
                    </Label>
                    <Input
                      id="houseNumber"
                      {...register("houseNumber")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="House number"
                    />
                    {errors.houseNumber && <p className="text-red-500 text-sm mt-1">{errors.houseNumber.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth" className="text-slate-700 font-semibold flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Date of birth *</span>
                    </Label>
                    <Input
                      id="dateOfBirth"
                      {...register("dateOfBirth")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="mm/dd/yyyy"
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="placeOfBirth" className="text-slate-700 font-semibold">
                      Place of birth *
                    </Label>
                    <Input
                      id="placeOfBirth"
                      {...register("placeOfBirth")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="Place of birth"
                    />
                    {errors.placeOfBirth && <p className="text-red-500 text-sm mt-1">{errors.placeOfBirth.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="phone" className="text-slate-700 font-semibold flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Phone *</span>
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                      placeholder="+XX X XXXX XXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Bank Information */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-slate-800">BANK</h3>
                </div>

                <div>
                  <Label htmlFor="iban" className="text-slate-700 font-semibold">
                    IBAN *
                  </Label>
                  <Input
                    id="iban"
                    {...register("iban")}
                    className="mt-2 h-12 rounded-full border-2 border-slate-200 focus:border-blue-500"
                    placeholder="Enter your IBAN"
                  />
                  {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban.message}</p>}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="agreeToTerms" className="text-slate-700 leading-relaxed">
                  I agree with the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                    politicians ozbigwinaustralia.com
                  </Link>{" "}
                  and data processing for my inquiry
                </Label>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>}

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="oz-button-primary text-xl px-16 py-4 disabled:opacity-50"
                >
                  {isSubmitting ? "Creating Account..." : "Sign Up"}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-slate-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Log In
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
        type="registration"
        userEmail={userEmail}
      />
    </>
  )
}
