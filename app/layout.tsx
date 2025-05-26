import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "OZ Lotto - Australia's Favorite Lottery Game | OzBigWinAustralia.com",
    template: "%s | OzBigWinAustralia.com",
  },
  description:
    "Play OZ Lotto online at OzBigWinAustralia.com. Australia's favorite lottery with jackpots that regularly soar to $50 million+. Your moment to shine in 2025!",
  keywords: ["oz lotto", "australian lottery", "jackpot", "lotto online", "lottery tickets"],
  authors: [{ name: "OzBigWinAustralia.com" }],
  creator: "OzBigWinAustralia.com",
  publisher: "OzBigWinAustralia.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://ozbigwinaustralia.com",
    siteName: "OzBigWinAustralia.com",
    title: "OZ Lotto - Australia's Favorite Lottery Game",
    description:
      "Play OZ Lotto online. Australia's favorite lottery with massive jackpots. Your moment to shine in 2025!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OZ Lotto - Your moment to shine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OZ Lotto - Australia's Favorite Lottery Game",
    description: "Play OZ Lotto online. Australia's favorite lottery with massive jackpots.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OzBigWinAustralia.com",
              url: "https://ozbigwinaustralia.com",
              logo: "https://ozbigwinaustralia.com/images/logo.png",
              description: "Australia's favorite lottery platform for OZ Lotto",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://www.facebook.com/ozbigwinaustralia", "https://www.twitter.com/ozbigwinaustralia"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
