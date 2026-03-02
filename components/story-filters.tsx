"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const filters = [
  { key: "latest", label: "Latest" },
  { key: "most-read", label: "Most Read" },
  { key: "by-category", label: "By Category" },
] as const

type FilterKey = (typeof filters)[number]["key"]

export default function StoryFilters() {
  const [active, setActive] = useState<FilterKey>("latest")

  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <Button
          key={f.key}
          variant={active === f.key ? "default" : "outline"}
          className={active === f.key ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
          onClick={() => setActive(f.key)}
        >
          {f.label}
        </Button>
      ))}
    </div>
  )
}
