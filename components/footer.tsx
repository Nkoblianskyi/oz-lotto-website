import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Heart, Award, Zap, Star, Trophy } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="oz-dark-gradient text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Zap className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20">
          <Star className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-32">
          <Trophy className="w-14 h-14" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Award className="w-10 h-10" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg">
                18+
              </div>
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 oz-text-gradient">PLAY RESPONSIBLY</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Make thoughtful choices and stay in control. If you need assistance, reach out to the Gambling Help Line
              at 1800 858 858 or visit GambleAware online at{" "}
              <Link
                href="https://www.gambleaware.org/"
                className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.gambleaware.org.au
              </Link>
            </p>
            <p className="text-slate-400 text-sm">
              For those seeking self-exclusion from all online gambling platforms, BetStop provides a free service as
              the National Self-Exclusion Register.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-purple-400" />
              <h4 className="font-semibold text-lg">Licensed & Regulated</h4>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Lucky Lotteries is operated under strict local regulations and is licensed by the Australian Government.
              We are committed to promoting responsible gambling practices.
            </p>
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-red-400" />
              <p className="text-slate-400 text-sm">
                Lucky Lotteries is a trademark of The Australian Group Limited. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-6">
            <div className="flex flex-col space-y-3 text-right">
              <Link href="/privacy-policy" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Cookie Policy
              </Link>
            </div>
            <Link href="/login">
              <Button className="oz-button-secondary">Get app →</Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* 18+ Badge */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
              18+
            </div>

            {/* Gambler's Help */}
            <Link
              href="https://gamblershelp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gambler's Help"
              className="hover:opacity-80 transition-opacity group"
            >
              <Image src="/gamblershelp.svg" alt="Gambler's Help" width={100} height={100} />
            </Link>

            {/* Victoria Government */}
            <Link
              href="https://www.vic.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Victoria Government"
              className="hover:opacity-80 transition-opacity group"
            >
              <Image src="/victoria.svg" alt="Victoria Government" width={100} height={100} />
            </Link>

            {/* Reset App */}
            <Link
              href="https://resetapp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reset App"
              className="hover:opacity-80 transition-opacity group"
            >
              <Image src="/reset.svg" alt="Victoria Government" width={100} height={100} />
            </Link>

            {/* BeGambleAware */}
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Be Gamble Aware"
              className="hover:opacity-80 transition-opacity group"
            >
              <Image src="/bgambleaware.svg" alt="Victoria Government" width={100} height={100} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
