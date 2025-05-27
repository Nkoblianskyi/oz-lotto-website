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
        className="oz-gradient text-white py-12 sm:py-16 md:py-24 relative overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 tracking-tight"
            >
              UNLEASH YOUR
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FORTUNE IN 2025
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wide">
              AUSTRALIA'S ULTIMATE JACKPOT ADVENTURE!
            </h2>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              The universe is calling your name! Every number drawn brings you closer to extraordinary wealth. With
              jackpots exploding beyond $50 million, this isn't just a game—it's your gateway to unlimited
              possibilities. Strike while destiny awaits!
            </p>

            <div className="mb-6 sm:mb-8 md:mb-12">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
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
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              id="about-title"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black oz-text-gradient mb-3 sm:mb-4 md:mb-6 tracking-tight"
            >
              OZ LOTTO – IGNITE YOUR WILDEST DREAMS!
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium">
              Transform ordinary Tuesday nights into life-changing moments! With Division One prizes launching from $2
              million and soaring beyond $50 million, every draw is your chance to rewrite history. Join Australia's
              most electrifying lottery experience!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl">
              <CardContent className="p-4 sm:p-6 md:p-10 text-center">
                <h3 className="text-lg sm:text-xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                  POWER PLAY TUESDAY
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  Exclusive multiplier bonuses for VIP members
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl">
              <CardContent className="p-4 sm:p-6 md:p-10 text-center">
                <h3 className="text-lg sm:text-xl md:text-3xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                  FORTUNE BOOST
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  Enhanced payouts across all prize divisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why OZ Lotto Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" aria-labelledby="why-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              id="why-title"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black oz-text-gradient mb-3 sm:mb-4 md:mb-6 tracking-tight"
            >
              WHY CHOOSE OZ LOTTO?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Experience the pinnacle of Australian lottery excellence with unmatched rewards and revolutionary features
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Row 1 - Left aligned */}
            <div className="flex justify-start">
              <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    AUSTRALIA'S #1 CHOICE
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Creating more instant millionaires than any competitor
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 2 - Right aligned */}
            <div className="flex justify-end">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    MULTIPLE WIN PATHS
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Seven exciting ways to claim your prize (starting from 3+1 match)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 3 - Left aligned */}
            <div className="flex justify-start">
              <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    LEGENDARY JACKPOTS
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Over half a billion dollars awarded to winners nationwide
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 4 - Right aligned */}
            <div className="flex justify-end">
              <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                    <Bell className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    LIGHTNING ALERTS
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Get winning notifications before official broadcasts
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 5 - Left aligned */}
            <div className="flex justify-start">
              <Card className="bg-gradient-to-br from-purple-600 to-pink-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    SMART SELECTION
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Two-thirds of champions trust our intelligent number picker
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Row 6 - Right aligned */}
            <div className="flex justify-end">
              <Card className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white border-none shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    GIVING BACK
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Every purchase supports vital Australian community programs
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
