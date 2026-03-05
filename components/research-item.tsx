import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface ResearchItemProps {
  title: string
  excerpt: string
  author: string
  date: string
}

export default function ResearchItem({ title, excerpt, author, date }: ResearchItemProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{author}</span>
          <Badge variant="secondary">{date}</Badge>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant="ghost" className="ml-auto">
          Read More
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
