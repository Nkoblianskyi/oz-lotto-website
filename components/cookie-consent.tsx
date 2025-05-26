"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-slate-200 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1 pr-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 id="cookie-consent-title" className="text-xl font-bold mb-3 text-slate-800">
                  Cookie Settings
                </h3>
                <p id="cookie-consent-description" className="text-slate-600 mb-6 leading-relaxed">
                  We use cookies to enhance your experience on our website. By continuing to use our site, you agree to
                  our use of cookies as described in our{" "}
                  <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={acceptCookies} className="oz-button-primary" aria-label="Accept all cookies">
                    Accept All Cookies
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-6 py-3 font-semibold"
                    aria-label="Decline cookies"
                  >
                    Decline
                  </Button>
                  <Link href="/cookie-policy">
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-full px-6 py-3 font-semibold"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close cookie consent"
            >
              <X size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
