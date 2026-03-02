import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ActionCardProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

export default function ActionCard({ title, description, ctaText, ctaHref }: ActionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
