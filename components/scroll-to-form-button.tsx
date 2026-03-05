"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ScrollToFormButton() {
  const handleClick = () => {
    document.getElementById("story-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={handleClick}>
      Start Sharing Your Story
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  )
}
