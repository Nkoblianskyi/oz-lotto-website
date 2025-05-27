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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 xs:p-4">
      <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-xl xs:rounded-2xl sm:rounded-3xl max-w-xs xs:max-w-sm sm:max-w-md mx-auto relative overflow-hidden">
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 xs:top-4 left-2 xs:left-4">
              <Star className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 text-yellow-400" />
            </div>
            <div className="absolute top-4 xs:top-8 right-3 xs:right-6">
              <Trophy className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-purple-500" />
            </div>
            <div className="absolute bottom-4 xs:bottom-8 left-4 xs:left-8">
              <Gift className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 text-green-500" />
            </div>
            <div className="absolute bottom-2 xs:bottom-4 right-2 xs:right-4">
              <Star className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
          </div>
        )}

        <CardContent className="p-4 xs:p-6 sm:p-8 text-center relative z-10">
          <button
            onClick={onClose}
            className="absolute top-2 xs:top-4 right-2 xs:right-4 text-slate-400 hover:text-slate-600 p-1 xs:p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close popup"
          >
            <X size={16} className="xs:w-5 xs:h-5" />
          </button>

          <div className="mb-4 xs:mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2 xs:p-3 sm:p-4 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto mb-2 xs:mb-3 sm:mb-4 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 text-white" />
            </div>

            <h2 className="text-lg xs:text-xl sm:text-3xl font-bold text-slate-800 mb-1 xs:mb-2">
              {isRegistration ? "🎉 Welcome Aboard!" : "🎯 Welcome Back!"}
            </h2>

            <p className="text-sm xs:text-base sm:text-lg text-slate-600">
              {isRegistration ? "Your account has been created successfully!" : "You've logged in successfully!"}
            </p>
          </div>

          {userEmail && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 mb-3 xs:mb-4 sm:mb-6">
              <p className="text-slate-700 text-xs xs:text-sm sm:text-base">
                <span className="font-semibold">Email:</span> {userEmail}
              </p>
            </div>
          )}

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 mb-3 xs:mb-4 sm:mb-6">
            <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 mb-1 xs:mb-2">
              <Trophy className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-500" />
              <h3 className="font-bold text-slate-800 text-xs xs:text-sm sm:text-base">Redirecting to Home...</h3>
            </div>
            <p className="text-slate-600 text-xs xs:text-sm">
              You will be automatically redirected to the home page in a few seconds
            </p>
          </div>

          <p className="text-xs text-slate-500">This popup will close automatically and redirect you to home</p>
        </CardContent>
      </Card>
    </div>
  )
}
