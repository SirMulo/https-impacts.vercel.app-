import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { getStories } from "@/lib/api"
import StoryFilters from "@/components/story-filters"

export default async function StoriesPage({ params }: { params: { page: string } }) {
  const page = Number.parseInt(params.page, 10)
  const stories = await getStories(page, 6)

  return (
    <main className="min-h-screen">
      <div className="container mt-8">
        <Button variant="ghost" className="text-blue-600" asChild>
          <Link href={page > 2 ? `/stories/page/${page - 1}` : "/stories"}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Page
          </Link>
        </Button>
      </div>

      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="bg-blue-600 text-white mb-4">All Stories</Badge>
              <h2 className="font-serif text-3xl font-bold">Voices of Change - Page {page}</h2>
            </div>
            <StoryFilters />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.length === 0 ? (
            <div className="col-span-full text-center py-24">
              <h3 className="font-serif text-2xl font-bold mb-4">No more stories yet -- check back soon</h3>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                <Link href="/stories">Back to Stories</Link>
              </Button>
            </div>
          ) : (
            stories.map((story, i) => (
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
            ))
          )}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
              <Link href={`/stories/page/${page + 1}`}>
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
