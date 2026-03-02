import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface SuccessStoryProps {
  image: string
  title: string
  quote: string
  name: string
  role: string
}

export default function SuccessStory({ image, title, quote, name, role }: SuccessStoryProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <blockquote className="italic mb-4">"{quote}"</blockquote>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
          <Button variant="ghost">
            Read Full Story
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

