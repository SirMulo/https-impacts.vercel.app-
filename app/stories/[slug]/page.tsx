import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import { getStoryBySlug } from "@/lib/api"

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug)

  if (!story) {
    return <div>Story not found</div>
  }

  return (
    <main className="min-h-screen">
      <div className="container mt-8">
        <Button variant="ghost" className="text-blue-600" asChild>
          <Link href="/stories">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Stories
          </Link>
        </Button>
      </div>

      <article className="container max-w-4xl mx-auto py-12">
        <Badge className="bg-orange-600 text-white mb-4">{story.category}</Badge>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">{story.title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <div>
            <div className="font-medium">{story.author}</div>
            <div className="text-sm text-muted-foreground">{story.role}</div>
          </div>
          <div className="text-sm text-muted-foreground">{story.date}</div>
        </div>
        <div className="aspect-[16/9] relative mb-8">
          <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover rounded-lg" />
        </div>
        <div className="prose prose-lg max-w-none">
          {story.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  )
}

