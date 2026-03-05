"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Vennligst skriv inn e-postadressen din")
      return
    }

    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    toast({
      title: "Takk for at du abonnerer!",
      description: "Du vil motta de siste historiene, karriereinnsikt og påvirkningsoppdateringer i innboksen din.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Skriv inn e-postadressen din"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError("")
          }}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Abonnerer..." : "Abonner på nyhetsbrevet"}
        </Button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  )
}
