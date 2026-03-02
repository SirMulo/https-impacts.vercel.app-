import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "EthoLight — Advocating for Skilled Immigrants in Norway",
  description:
    "EthoLight challenges the systemic underemployment of highly educated immigrants in Norway through storytelling, research, and advocacy.",
  openGraph: {
    title: "EthoLight — Advocating for Skilled Immigrants in Norway",
    description:
      "EthoLight challenges the systemic underemployment of highly educated immigrants in Norway through storytelling, research, and advocacy.",
  },
    generator: 'v0.app'
}

const quickLinks = [
  { label: "Stories", href: "/stories" },
  { label: "Research", href: "/research" },
  { label: "Impact", href: "/impact" },
  { label: "Join the Solution", href: "/join-the-fight" },
]

const resourceLinks = [
  { label: "About Us", href: "/" },
  { label: "Contact", href: "mailto:hello@ethorise.no" },
  { label: "Press", href: "/" },
  { label: "Partners", href: "/impact" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-blue-600">EthoLight</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/stories" className="text-sm font-medium hover:text-blue-600">
                Stories
              </Link>
              <Link href="/research" className="text-sm font-medium hover:text-blue-600">
                Research
              </Link>
              <Link href="/impact" className="text-sm font-medium hover:text-blue-600">
                Impact
              </Link>
              <Link href="/join-the-fight" className="text-sm font-medium hover:text-blue-600">
                Join the Solution
              </Link>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link href="/stories" className="text-lg font-medium">
                    Stories
                  </Link>
                  <Link href="/research" className="text-lg font-medium">
                    Research
                  </Link>
                  <Link href="/impact" className="text-lg font-medium">
                    Impact
                  </Link>
                  <Link href="/join-the-fight" className="text-lg font-medium">
                    Join the Solution
                  </Link>
                  <Link href="/share-your-story" className="text-lg font-medium">
                    Share Your Story
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/share-your-story">Share Your Story</Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/join-the-fight">Join the Solution</Link>
              </Button>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-slate-900 text-white mt-auto">
          <div className="container py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link href="/" className="inline-block mb-4">
                  <span className="font-serif text-2xl font-bold">EthoLight</span>
                </Link>
                <p className="text-slate-400 max-w-md">
                  Fighting for recognition and justice for skilled immigrants in Norway. Join us in challenging the
                  system and creating change.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-slate-400 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {resourceLinks.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-slate-400 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="container flex flex-col sm:flex-row justify-between items-center py-6">
              <p className="text-slate-400">© {new Date().getFullYear()} EthoLight. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/" className="text-slate-400 hover:text-white">
                  Privacy
                </Link>
                <Link href="/" className="text-slate-400 hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
