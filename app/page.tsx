import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { Heart, Zap, Shield, Bell, Sparkles, Users } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "OZ Lotto - Your Moment to Shine in 2025",
  description:
    "Australia's hottest lottery thrill is here! Play OZ Lotto with jackpots that regularly soar to $50 million+. Next draw countdown live.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="oz-gradient text-white py-12 sm:py-16 md:py-24 relative overflow-hidden animate-fade-in"
        aria-labelledby="hero-title"
      >
        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 tracking-tight animate-slide-up"
            >
              YOUR MOMENT TO
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse-slow">
                SHINE IN 2025
              </span>
            </h1>

            <h2
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wide animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              OZ LOTTO'S HOTTEST THRILL IS HERE!
            </h2>

            <p
              className="text-sm sm:text-base md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              This is it—your golden ticket to a life remade! The stars have aligned, the jackpot is sizzling, and your
              winning moment could be one quick pick away. Don't let luck slip through your fingers—grab your shot
              before the clock runs out!
            </p>

            <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <CountdownTimer />
            </div>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mt-6 sm:mt-8 md:mt-12 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link href="/login">
                <Button className="oz-button-primary text-sm sm:text-base md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 font-bold w-full sm:w-auto">
                  Buy Ticket Now
                </Button>
              </Link>
              <Link href="/login">
                <Button className="oz-button-secondary text-sm sm:text-base md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 font-bold w-full sm:w-auto">
                  Get App
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 animate-fade-in"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              id="about-title"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black oz-text-gradient mb-3 sm:mb-4 md:mb-6 tracking-tight animate-slide-up"
            >
              OZ LOTTO – WHERE DREAMS TAKE FLIGHT!
            </h2>
            <p
              className="text-sm sm:text-base md:text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Step into the spotlight with Oz Lotto—where every Tuesday night could rewrite your story. This year's
              Division One prize pool starts at 2 million, with jackpots that regularly soar to 50 million+!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl animate-float">
              <CardContent className="p-4 sm:p-6 md:p-10 text-center">
                <h3 className="text-lg sm:text-xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                  DOUBLE DIP TUESDAY
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium">Special bonus draws for loyal players</p>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              <CardContent className="p-4 sm:p-6 md:p-10 text-center">
                <h3 className="text-lg sm:text-xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                  MEGA MATCH
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium">Extra prize boosts for Divisions 2-7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why OZ Lotto Section - Шахматний порядок з перекриттям */}
      <section className="py-12 sm:py-16 md:py-20 bg-white animate-fade-in" aria-labelledby="why-title">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              id="why-title"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black oz-text-gradient mb-3 sm:mb-4 md:mb-6 tracking-tight animate-slide-up"
            >
              WHY OZ LOTTO?
            </h2>
            <p
              className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto font-medium animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover what makes OZ Lotto Australia's most trusted and exciting lottery experience
            </p>
          </div>

          {/* Шахматне розташування з перекриттям на половину висоти */}
          <div className="max-w-6xl mx-auto relative">
            {/* 1. Ліва картка - базова позиція */}
            <div
              className="flex justify-start mb-4 sm:mb-6 md:mb-8 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-10">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    AUSTRALIA'S FAVORITE GAME
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    More millionaires created than any other lottery
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 2. Права картка - зміщена вгору на половину висоти */}
            <div
              className="flex justify-end -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-20">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    7 WAYS TO WIN
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Prizes start at Division 7 (match 3+1 numbers)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. Ліва картка - зміщена вгору на половину висоти */}
            <div
              className="flex justify-start -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-30">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    RECORD JACKPOTS
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Over $500 million won nationally last year
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. Права картка - зміщена вгору на половину висоти */}
            <div
              className="flex justify-end -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8 animate-slide-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-40">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                    <Bell className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    INSTANT NOTIFICATIONS
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">Know before the TV announcement</p>
                </CardContent>
              </Card>
            </div>

            {/* 5. Ліва картка - зміщена вгору на половину висоти */}
            <div
              className="flex justify-start -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8 animate-slide-up"
              style={{ animationDelay: "1.1s" }}
            >
              <Card className="bg-gradient-to-br from-purple-600 to-pink-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-50">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    QUICKPICK MAGIC
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">65% of winners let the system choose</p>
                </CardContent>
              </Card>
            </div>

            {/* 6. Права картка - зміщена вгору на половину висоти */}
            <div
              className="flex justify-end -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 animate-slide-up"
              style={{ animationDelay: "1.3s" }}
            >
              <Card className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 w-full max-w-sm sm:max-w-md lg:max-w-lg relative z-60">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto animate-pulse-slow">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    COMMUNITY IMPACT
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Every ticket supports Australian charities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
