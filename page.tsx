import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Menu, ChevronRight, BarChart, Users, Clock, Share2 } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Asceniq
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#stories" className="text-sm font-medium hover:text-blue-600">
              Stories
            </Link>
            <Link href="#research" className="text-sm font-medium hover:text-blue-600">
              Research
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-blue-600">
              Impact
            </Link>
            <Link href="#take-action" className="text-sm font-medium hover:text-blue-600">
              Take Action
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
                <Link href="#stories" className="text-lg font-medium">
                  Stories
                </Link>
                <Link href="#research" className="text-lg font-medium">
                  Research
                </Link>
                <Link href="#impact" className="text-lg font-medium">
                  Impact
                </Link>
                <Link href="#take-action" className="text-lg font-medium">
                  Take Action
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Share Your Story</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Join the Fight</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="A professional woman looking determined"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>
          <div className="relative container">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-orange-600 text-white hover:bg-orange-700">Featured Story</Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                From CEO to Cleaner: Norway's Hidden Talent Crisis
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                "I led a multinational corporation. Now I clean offices. This isn't just my story—it's the story of
                thousands of skilled immigrants in Norway."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Join the Fight for Recognition
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Share Your Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-24 bg-blue-600">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "78%",
                  label: "Of skilled immigrants are underemployed",
                },
                {
                  icon: BarChart,
                  number: "€2.8B",
                  label: "Annual impact of underutilization",
                },
                {
                  icon: Clock,
                  number: "5+ Years",
                  label: "Average time to return to profession",
                },
                {
                  icon: Share2,
                  number: "2,500+",
                  label: "Stories collected and counting",
                },
              ].map((stat, i) => (
                <Card key={i} className="p-6 bg-white/10 backdrop-blur-sm border-none text-white">
                  <stat.icon className="h-8 w-8 mb-4 text-orange-400" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <p className="text-white/80">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <Badge className="bg-orange-600 text-white mb-4">Latest Stories</Badge>
                <h2 className="font-serif text-3xl font-bold">Their Success Didn't End When They Moved</h2>
              </div>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                  title: "From Engineering Director to Delivery Driver",
                  quote: "My 15 years of experience means nothing here. The system needs to change.",
                  author: "Ahmed Hassan",
                  role: "Former Engineering Director",
                },
                {
                  image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8",
                  title: "A Doctor's Journey Back to Medicine",
                  quote: "Five years of cleaning hospitals before I could practice medicine again.",
                  author: "Dr. Maria Silva",
                  role: "Now: Resident Physician",
                },
                {
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                  title: "Breaking Barriers in Tech",
                  quote: "They said my experience didn't count. Now I lead a development team.",
                  author: "Sarah Chen",
                  role: "Former Tech Lead",
                },
              ].map((story, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] relative">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-muted-foreground mb-4 italic">"{story.quote}"</p>
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="font-medium">{story.author}</div>
                        <div className="text-sm text-muted-foreground">{story.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-24 bg-slate-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <Badge className="bg-blue-600 text-white mb-4">Research & Analysis</Badge>
                <h2 className="font-serif text-3xl font-bold">Understanding the Impact</h2>
              </div>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Research
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "The Economic Cost of Credential Non-Recognition",
                  excerpt:
                    "New research reveals how Norway's strict qualification requirements cost billions in lost productivity",
                  author: "Dr. Emma Nielsen",
                  date: "January 2024",
                },
                {
                  title: "Beyond Numbers: The Human Impact of Underemployment",
                  excerpt:
                    "Comprehensive study shows the psychological toll of professional displacement on immigrant communities",
                  author: "Prof. Thomas Berg",
                  date: "December 2023",
                },
              ].map((article, i) => (
                <Card key={i} className="p-6">
                  <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">Research</Badge>
                  <h3 className="font-serif text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {article.author} • {article.date}
                    </div>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="take-action" className="py-24 bg-blue-600 text-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="border-white text-white mb-6">
                  Take Action
                </Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Join the Fight for Recognition</h2>
                <p className="text-xl text-white/80 mb-8">
                  Every story shared, every voice raised brings us closer to changing the system. Together, we can
                  create a Norway that recognizes and values all talent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Share Your Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Support Our Campaign
                  </Button>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur-sm border-none p-6">
                <h3 className="font-serif text-xl font-bold mb-6">Stay Updated</h3>
                <p className="text-white/80 mb-6">
                  Join our newsletter to get the latest stories, research, and ways to take action.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-white/90">Subscribe to Newsletter</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-2xl font-bold">Asceniq</span>
              </Link>
              <p className="text-slate-400 max-w-md">
                Fighting for recognition and justice for skilled immigrants in Norway. Join us in challenging the system
                and creating change.
              </p>
            </div>
            {[
              {
                title: "Quick Links",
                links: ["Stories", "Research", "Impact", "Take Action"],
              },
              {
                title: "Resources",
                links: ["About Us", "Contact", "Press", "Partners"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="text-slate-400 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="container flex flex-col sm:flex-row justify-between items-center py-6">
            <p className="text-slate-400">© {new Date().getFullYear()} Asceniq. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

