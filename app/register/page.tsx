import { RegistrationForm } from "@/components/registration-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up - Create Your OZ Lotto Account",
  description:
    "Join SuperOzJackpot.com and start playing OZ Lotto. Create your account to access exclusive features and win big!",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen oz-gradient">
      <div className="container mx-auto px-4 py-8">
        <RegistrationForm />
      </div>
    </div>
  )
}
