"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, X, Trophy, Star, Gift } from "lucide-react"
import { useRouter } from "next/navigation"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  type: "registration" | "login"
  userEmail?: string
}

export function SuccessPopup({ isOpen, onClose, type, userEmail }: SuccessPopupProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      // Auto redirect to home page after 3 seconds
      const timer = setTimeout(() => {
        onClose()
        router.push("/")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose, router])

  if (!isOpen) return null

  const isRegistration = type === "registration"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl max-w-md mx-4 relative overflow-hidden">
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 animate-bounce">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute top-8 right-6 animate-pulse">
              <Trophy className="w-8 h-8 text-purple-500" />
            </div>
            <div className="absolute bottom-8 left-8 animate-bounce delay-300">
              <Gift className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute bottom-4 right-4 animate-pulse delay-500">
              <Star className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        )}

        <CardContent className="p-8 text-center relative z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>

          <div className="mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {isRegistration ? "Welcome Aboard!" : "Welcome Back!"}
            </h2>

            <p className="text-lg text-slate-600">
              {isRegistration ? "Your account has been created successfully!" : "You've logged in successfully!"}
            </p>
          </div>

          {userEmail && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
              <p className="text-slate-700">
                <span className="font-semibold">Email:</span> {userEmail}
              </p>
            </div>
          )}

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <Trophy className="w-6 h-6 text-blue-500" />
              <h3 className="font-bold text-slate-800">Redirecting to Home...</h3>
            </div>
            <p className="text-slate-600 text-sm">
              You will be automatically redirected to the home page in a few seconds
            </p>
          </div>

          <p className="text-xs text-slate-500">This popup will close automatically and redirect you to home</p>
        </CardContent>
      </Card>
    </div>
  )
}
