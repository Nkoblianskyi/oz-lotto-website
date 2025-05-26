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
      <section className="oz-gradient text-white py-24 relative overflow-hidden" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Trophy className="w-20 h-20" />
          </div>
          <div className="absolute top-20 right-20">
            <Star className="w-16 h-16" />
          </div>
          <div className="absolute bottom-20 left-32">
            <Target className="w-18 h-18" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Award className="w-12 h-12" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Trophy className="w-16 h-16 text-yellow-400" />
            <h1 id="about-hero-title" className="text-4xl md:text-6xl font-bold leading-tight">
              ABOUT US – YOUR TRUSTED
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                LOTTERY PARTNER
              </span>
            </h1>
            <Shield className="w-16 h-16 text-cyan-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link href="/login">
              <Button className="oz-button-primary text-xl px-12 py-6">Buy Ticket Now</Button>
            </Link>
            <Link href="/login">
              <Button className="oz-button-secondary text-xl px-12 py-6">Get App</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" aria-labelledby="who-we-are-title">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Heart className="w-12 h-12 text-red-500" />
                <h2 id="who-we-are-title" className="text-4xl font-bold oz-text-gradient">
                  WHO WE ARE
                </h2>
              </div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At OzBigWinAustralia.com, we're more than a lottery platform—we're dream facilitators. Our team of
                  gaming experts, tech wizards, and customer champions work tirelessly to deliver:
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span>
                        <strong>Frictionless play</strong> – Tickets in 3 taps
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span>
                        <strong>Bank-level security</strong> – Your data stays private
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      <span>
                        <strong>Lightning payouts</strong> – Winnings hit your account within hours
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl">
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                    500M+
                  </div>
                  <div className="text-xl opacity-90">Total Winnings Distributed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-4 text-cyan-400">50K+</div>
                  <div className="text-lg opacity-90">Happy Winners</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-4 text-yellow-400">99.9%</div>
                  <div className="text-lg opacity-90">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white" aria-labelledby="our-promise-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="our-promise-title" className="text-4xl md:text-5xl font-bold oz-text-gradient mb-6">
              OUR PROMISE
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're committed to providing you with the best lottery experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl">
              <CardContent className="p-10">
                <Shield className="w-16 h-16 mb-6 text-cyan-400" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-6">SECURITY FIRST</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-4">Your trust is sacred. We use:</p>
                <ul className="space-y-2 text-lg opacity-90">
                  <li>• AES-256 encryption</li>
                  <li>• Two-factor authentication</li>
                  <li>• Independent game audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl">
              <CardContent className="p-10">
                <Award className="w-16 h-16 mb-6 text-yellow-400" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-6">FAIR PLAY GUARANTEED</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Every number has equal chance—no algorithms, no tricks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-700 text-white border-none shadow-2xl md:col-span-2">
              <CardContent className="p-10">
                <Users className="w-16 h-16 mb-6 text-cyan-400" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-6">WINS THAT GIVE BACK</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-4">5% of every ticket goes to:</p>
                <ul className="space-y-2 text-lg opacity-90">
                  <li>• Rural healthcare</li>
                  <li>• Wildlife sanctuaries</li>
                  <li>• Youth sports programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Winner Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" aria-labelledby="testimonials-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold oz-text-gradient mb-6">
              WINNER TESTIMONIALS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from real winners who changed their lives with OZ Lotto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mb-6 italic text-lg leading-relaxed">
                  "Was fixing my ute when the app notification popped up. Nearly dropped my spanner! Paid off the family
                  farm and built a mechanic school for at-risk kids."
                </p>
                <div className="text-cyan-400 font-bold text-lg">Dave R. ($15M – Brisbane)</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mb-6 italic text-lg leading-relaxed">
                  "Single mum working two jobs. Now my daughters' university is paid for and we volunteer at the food
                  bank I used to visit."
                </p>
                <div className="text-yellow-400 font-bold text-lg">Priya K. ($2.3M – Melbourne)</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mb-6 italic text-lg leading-relaxed">
                  "Retirement plans upgraded from caravan trips to sailing the Mediterranean! Still play every week—it's
                  our Tuesday ritual."
                </p>
                <div className="text-cyan-400 font-bold text-lg">The Thompson Family ($50M – Sydney)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
