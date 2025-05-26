import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Log In - Access Your OZ Lotto Account",
  description:
    "Log in to your SuperOzJackpot.com account to check your tickets, view results, and manage your lottery experience.",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen oz-gradient">
      <div className="container mx-auto px-4 py-8">
        <LoginForm />
      </div>
    </div>
  )
}
