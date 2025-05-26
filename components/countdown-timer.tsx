"use client"

import { useState, useEffect } from "react"
import { Clock, Zap } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft & { nextTuesday?: Date }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, ..., 3 = Wednesday, ..., 6 = Saturday

      // Calculate days until next Wednesday
      let daysUntilTuesday = (2 - currentDay + 7) % 7

      // If today is Wednesday and it's past midnight, count to next Wednesday
      if (daysUntilTuesday === 0) {
        daysUntilTuesday = 7
      }

      const nextTuesday = new Date(now)
      nextTuesday.setDate(now.getDate() + daysUntilTuesday)
      nextTuesday.setHours(20, 0, 0, 0) // Set to 8:00 PM on Tuesday (draw time)

      const difference = nextTuesday.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds, nextTuesday }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0, nextTuesday }
    }

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="countdown-timer rounded-3xl p-10 text-white text-center max-w-2xl mx-auto relative overflow-hidden"
      role="timer"
      aria-label="Countdown to next draw"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4">
          <Zap className="w-8 h-8" />
        </div>
        <div className="absolute top-4 right-4">
          <Clock className="w-8 h-8" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 right-4">
          <Clock className="w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Clock className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold">NEXT DRAW</h2>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-slate-100 text-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="text-4xl font-bold mb-2" aria-label={`${timeLeft.days} days`}>
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-semibold text-slate-600">Days</div>
          </div>
          <div className="bg-gradient-to-br from-white to-slate-100 text-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="text-4xl font-bold mb-2" aria-label={`${timeLeft.hours} hours`}>
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-semibold text-slate-600">Hours</div>
          </div>
          <div className="bg-gradient-to-br from-white to-slate-100 text-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="text-4xl font-bold mb-2" aria-label={`${timeLeft.minutes} minutes`}>
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-semibold text-slate-600">Minutes</div>
          </div>
          <div className="bg-gradient-to-br from-white to-slate-100 text-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="text-4xl font-bold mb-2" aria-label={`${timeLeft.seconds} seconds`}>
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm font-semibold text-slate-600">Seconds</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-xl font-bold text-cyan-300">DRAW #{Math.floor(Math.random() * 10000) + 28000}</p>
          <p className="text-lg opacity-90">
            (
            {timeLeft.nextTuesday
              ? timeLeft.nextTuesday
                  .toLocaleDateString("en-AU", {
                    weekday: "long",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()
              : "LOADING..."}
            )
          </p>
        </div>
      </div>
    </div>
  )
}
