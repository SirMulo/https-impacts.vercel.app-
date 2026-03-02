import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"
import { getStories } from "@/lib/api"

export default async function StoriesPage() {
  const stories = await getStories(1, 6)

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
            alt="Featured story hero image"
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
            <blockquote className="text-xl md:text-2xl text-white/90 border-l-4 border-orange-600 pl-6">
              "I led a multinational corporation. Now I clean offices. This isn't just my story—it's the story of
              thousands of skilled immigrants in Norway."
            </blockquote>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/stories/from-ceo-to-cleaner">
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mt-8">
        <Button variant="ghost" className="text-blue-600" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="bg-blue-600 text-white mb-4">All Stories</Badge>
              <h2 className="font-serif text-3xl font-bold">Voices of Change</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Latest</Button>
              <Button variant="outline">Most Read</Button>
              <Button variant="outline">By Category</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">{story.author}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                    </div>
                    <Button variant="ghost" className="text-blue-600" asChild>
                      <Link href={`/stories/${story.slug}`}>
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">{story.date}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
              <Link href="/stories/page/2">
                Load More Stories
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

