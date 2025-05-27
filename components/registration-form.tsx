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
      <div className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl mx-auto">
        <div className="text-center mb-4 xs:mb-6 sm:mb-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
            SIGN UP
          </h1>
          <p className="text-sm xs:text-base sm:text-xl text-white/90">
            Join thousands of winners and start your lottery journey today
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-xl xs:rounded-2xl sm:rounded-3xl">
          <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 xs:space-y-6 sm:space-y-8">
              {/* Login Credentials */}
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <div>
                  <Label
                    htmlFor="email"
                    className="text-slate-700 font-semibold flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base"
                  >
                    <Mail className="w-3 h-3 xs:w-4 xs:h-4" />
                    <span>E-mail *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 transition-colors text-xs xs:text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label
                    htmlFor="password"
                    className="text-slate-700 font-semibold flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base"
                  >
                    <span>Password *</span>
                  </Label>
                  <div className="relative mt-1 xs:mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 transition-colors pr-8 xs:pr-10 sm:pr-12 text-xs xs:text-sm sm:text-base"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.password.message}</p>}
                </div>
              </div>

              {/* Account Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6">
                <div className="flex items-center space-x-1 xs:space-x-2 mb-3 xs:mb-4 sm:mb-6">
                  <User className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <h3 className="text-sm xs:text-base sm:text-xl font-bold text-slate-800">ACCOUNT</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="title" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      Title *
                    </Label>
                    <Select onValueChange={(value) => setValue("title", value)}>
                      <SelectTrigger className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 text-xs xs:text-sm sm:text-base">
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.title && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.title.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="firstName" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      First name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      Last name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="birthName" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      Birth name
                    </Label>
                    <Input
                      id="birthName"
                      {...register("birthName")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Birth name (if different)"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="zip"
                      className="text-slate-700 font-semibold flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base"
                    >
                      <MapPin className="w-3 h-3 xs:w-4 xs:h-4" />
                      <span>Zip *</span>
                    </Label>
                    <Input
                      id="zip"
                      {...register("zip")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Postal code"
                    />
                    {errors.zip && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.zip.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      Location *
                    </Label>
                    <Input
                      id="location"
                      {...register("location")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="City/Location"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.location.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="street" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                      Street *
                    </Label>
                    <Input
                      id="street"
                      {...register("street")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Street address"
                    />
                    {errors.street && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.street.message}</p>}
                  </div>

                  <div>
                    <Label
                      htmlFor="houseNumber"
                      className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base"
                    >
                      House number *
                    </Label>
                    <Input
                      id="houseNumber"
                      {...register("houseNumber")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="House number"
                    />
                    {errors.houseNumber && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.houseNumber.message}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="dateOfBirth"
                      className="text-slate-700 font-semibold flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base"
                    >
                      <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                      <span>Date of birth *</span>
                    </Label>
                    <Input
                      id="dateOfBirth"
                      {...register("dateOfBirth")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="mm/dd/yyyy"
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.dateOfBirth.message}</p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="placeOfBirth"
                      className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base"
                    >
                      Place of birth *
                    </Label>
                    <Input
                      id="placeOfBirth"
                      {...register("placeOfBirth")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="Place of birth"
                    />
                    {errors.placeOfBirth && (
                      <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.placeOfBirth.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label
                      htmlFor="phone"
                      className="text-slate-700 font-semibold flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base"
                    >
                      <Phone className="w-3 h-3 xs:w-4 xs:h-4" />
                      <span>Phone *</span>
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                      placeholder="+XX X XXXX XXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Bank Information */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6">
                <div className="flex items-center space-x-1 xs:space-x-2 mb-3 xs:mb-4 sm:mb-6">
                  <CreditCard className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-purple-600" />
                  <h3 className="text-sm xs:text-base sm:text-xl font-bold text-slate-800">BANK</h3>
                </div>

                <div>
                  <Label htmlFor="iban" className="text-slate-700 font-semibold text-xs xs:text-sm sm:text-base">
                    IBAN *
                  </Label>
                  <Input
                    id="iban"
                    {...register("iban")}
                    className="mt-1 xs:mt-2 h-8 xs:h-10 sm:h-12 rounded-full border-2 border-slate-200 focus:border-blue-500 text-xs xs:text-sm sm:text-base"
                    placeholder="Enter your IBAN"
                  />
                  {errors.iban && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.iban.message}</p>}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2 xs:space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
                  className="mt-0.5 xs:mt-1"
                />
                <Label
                  htmlFor="agreeToTerms"
                  className="text-slate-700 leading-relaxed text-xs xs:text-sm sm:text-base"
                >
                  I agree with the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                    politicians ozbigwinaustralia.com
                  </Link>{" "}
                  and data processing for my inquiry
                </Label>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-xs xs:text-sm">{errors.agreeToTerms.message}</p>}

              {/* Submit Button */}
              <div className="text-center pt-2 xs:pt-3 sm:pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="oz-button-primary text-sm xs:text-base sm:text-xl px-8 xs:px-12 sm:px-16 py-2 xs:py-3 sm:py-4 disabled:opacity-50 w-full xs:w-auto"
                >
                  {isSubmitting ? "Creating Account..." : "Sign Up"}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-slate-600 text-xs xs:text-sm sm:text-base">
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
