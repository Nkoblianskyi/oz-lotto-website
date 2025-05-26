"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="oz-gradient text-white sticky top-0 z-50 shadow-2xl" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3" aria-label="OZ Lotto Home">
            <Image src={"/logo.webp"} alt="OZ Lotto Logo" width={50} height={50}/>
          </Link>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link href="/" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/login" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group">
              CONTACT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/register">
              <Button
                variant="outline"
                className="border-2 border-white text-black bg-white hover:bg-slate-100 transition-all duration-300 rounded-full px-6 py-2 font-semibold"
              >
                Registration
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-white text-slate-800 hover:bg-cyan-100 transition-all duration-300 rounded-full px-6 py-2 font-semibold shadow-lg">
                Log In
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <Link href="/" className="hover:text-cyan-300 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/about" className="hover:text-cyan-300 transition-colors font-medium">
                ABOUT US
              </Link>
              <Link href="/login" className="hover:text-cyan-300 transition-colors font-medium">
                CONTACT US
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-black bg-white hover:bg-slate-100 rounded-full w-full"
                  >
                    Registration
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-white text-slate-800 hover:bg-cyan-100 rounded-full w-full">Log In</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
