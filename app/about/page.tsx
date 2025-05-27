import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Star, Trophy, Heart, Zap, Target } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Your Trusted Lottery Partner",
  description:
    "Learn about OzBigWinAustralia.com, Australia's trusted lottery platform. Discover our commitment to security, fair play, and responsible gaming.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="oz-gradient text-white py-8 xs:py-12 sm:py-16 md:py-24 relative overflow-hidden"
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 xs:top-4 sm:top-10 left-2 xs:left-4 sm:left-10">
            <Trophy className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>
          <div className="absolute top-4 xs:top-8 sm:top-20 right-4 xs:right-8 sm:right-20">
            <Star className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div className="absolute bottom-4 xs:bottom-8 sm:bottom-20 left-6 xs:left-12 sm:left-32">
            <Target className="w-7 h-7 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-18 md:h-18" />
          </div>
          <div className="absolute bottom-2 xs:bottom-4 sm:bottom-10 right-2 xs:right-4 sm:right-10">
            <Award className="w-5 h-5 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
        </div>

        <div className="container mx-auto px-1 xs:px-2 sm:px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-4 mb-4 xs:mb-6 sm:mb-8">
            <Trophy className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-yellow-400" />
            <h1
              id="about-hero-title"
              className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight"
            >
              ABOUT US – YOUR TRUSTED
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                LOTTERY PARTNER
              </span>
            </h1>
            <Shield className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center mt-6 xs:mt-8 sm:mt-12">
            <Link href="/login">
              <Button className="oz-button-primary text-sm xs:text-base sm:text-xl px-6 xs:px-8 sm:px-12 py-2 xs:py-3 sm:py-6 w-full sm:w-auto">
                Buy Ticket Now
              </Button>
            </Link>
            <Link href="/login">
              <Button className="oz-button-secondary text-sm xs:text-base sm:text-xl px-6 xs:px-8 sm:px-12 py-2 xs:py-3 sm:py-6 w-full sm:w-auto">
                Get App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="who-we-are-title"
      >
        <div className="container mx-auto px-1 xs:px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-4 xs:mb-6 sm:mb-8">
                <Heart className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500" />
                <h2
                  id="who-we-are-title"
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold oz-text-gradient"
                >
                  WHO WE ARE
                </h2>
              </div>
              <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-slate-600 text-sm xs:text-base sm:text-lg leading-relaxed">
                <p>
                  Welcome to OzBigWinAustralia.com, where fortune meets innovation! We're Australia's premier lottery
                  destination, powered by a passionate team of gaming specialists, technology pioneers, and dedicated
                  support professionals who are committed to transforming your lottery experience:
                </p>
                <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg">
                  <ul className="space-y-2 xs:space-y-3">
                    <li className="flex items-center space-x-2 xs:space-x-3">
                      <Zap className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-purple-600" />
                      <span className="text-xs xs:text-sm sm:text-base">
                        <strong>Frictionless play</strong> – Tickets in 3 taps
                      </span>
                    </li>
                    <li className="flex items-center space-x-2 xs:space-x-3">
                      <Shield className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <span className="text-xs xs:text-sm sm:text-base">
                        <strong>Bank-level security</strong> – Your data stays private
                      </span>
                    </li>
                    <li className="flex items-center space-x-2 xs:space-x-3">
                      <Trophy className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-yellow-600" />
                      <span className="text-xs xs:text-sm sm:text-base">
                        <strong>Lightning payouts</strong> – Winnings hit your account within hours
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl xs:rounded-2xl sm:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 text-white text-center shadow-2xl">
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                    500M+
                  </div>
                  <div className="text-sm xs:text-base sm:text-xl opacity-90">Total Winnings Distributed</div>
                </div>
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 text-cyan-400">
                    50K+
                  </div>
                  <div className="text-sm xs:text-base sm:text-lg opacity-90">Happy Winners</div>
                </div>
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400">
                    99.9%
                  </div>
                  <div className="text-sm xs:text-base sm:text-lg opacity-90">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="our-promise-title">
        <div className="container mx-auto px-1 xs:px-2 sm:px-4">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2
              id="our-promise-title"
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold oz-text-gradient mb-3 xs:mb-4 sm:mb-6"
            >
              OUR PROMISE
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              We're committed to providing you with the best lottery experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl">
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10">
                <Shield
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 xs:mb-4 sm:mb-6 text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">SECURITY FIRST</h3>
                <p className="text-sm xs:text-base sm:text-lg opacity-90 leading-relaxed mb-2 xs:mb-3 sm:mb-4">
                  Your trust is sacred. We use:
                </p>
                <ul className="space-y-1 xs:space-y-2 text-sm xs:text-base sm:text-lg opacity-90">
                  <li>• AES-256 encryption</li>
                  <li>• Two-factor authentication</li>
                  <li>• Independent game audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl">
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10">
                <Award
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 xs:mb-4 sm:mb-6 text-yellow-400"
                  aria-hidden="true"
                />
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">FAIR PLAY GUARANTEED</h3>
                <p className="text-sm xs:text-base sm:text-lg opacity-90 leading-relaxed">
                  Every number has equal chance—no algorithms, no tricks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-700 text-white border-none shadow-2xl md:col-span-2">
              <CardContent className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10">
                <Users
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 xs:mb-4 sm:mb-6 text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">WINS THAT GIVE BACK</h3>
                <p className="text-sm xs:text-base sm:text-lg opacity-90 leading-relaxed mb-2 xs:mb-3 sm:mb-4">
                  5% of every ticket goes to:
                </p>
                <ul className="space-y-1 xs:space-y-2 text-sm xs:text-base sm:text-lg opacity-90">
                  <li>• Rural healthcare</li>
                  <li>• Wildlife sanctuaries</li>
                  <li>• Youth sports programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section
        className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="success-stories-title"
      >
        <div className="container mx-auto px-1 xs:px-2 sm:px-4">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2
              id="success-stories-title"
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold oz-text-gradient mb-3 xs:mb-4 sm:mb-6"
            >
              LIFE-CHANGING SUCCESS STORIES
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the extraordinary Australians whose lives were transformed forever by OZ Lotto magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-2xl">
              <CardContent className="p-4 xs:p-6 sm:p-8">
                <div className="flex mb-3 xs:mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-3 xs:mb-4 sm:mb-6 italic text-sm xs:text-base sm:text-lg leading-relaxed">
                  "Thought my phone was broken when I got the notification! Went from fixing engines to funding a
                  technical college for disadvantaged youth. Dreams really do come true!"
                </p>
                <div className="text-cyan-400 font-bold text-sm xs:text-base sm:text-lg">
                  Marcus T. ($18M – Gold Coast)
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl">
              <CardContent className="p-4 xs:p-6 sm:p-8">
                <div className="flex mb-3 xs:mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-3 xs:mb-4 sm:mb-6 italic text-sm xs:text-base sm:text-lg leading-relaxed">
                  "From night shifts to financial freedom! Now my three kids have university funds secured and we've
                  opened a community center in our neighborhood."
                </p>
                <div className="text-yellow-400 font-bold text-sm xs:text-base sm:text-lg">
                  Sarah M. ($4.7M – Adelaide)
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl">
              <CardContent className="p-4 xs:p-6 sm:p-8">
                <div className="flex mb-3 xs:mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-3 xs:mb-4 sm:mb-6 italic text-sm xs:text-base sm:text-lg leading-relaxed">
                  "Retirement just got an incredible upgrade! From weekend camping trips to owning a luxury yacht. Still
                  play religiously every Tuesday—it's become our family tradition!"
                </p>
                <div className="text-cyan-400 font-bold text-sm xs:text-base sm:text-lg">
                  The Wilson Family ($62M – Perth)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
