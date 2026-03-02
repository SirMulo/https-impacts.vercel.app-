import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ImpactMetricProps {
  icon: LucideIcon
  number: string
  label: string
  image: string
}

export default function ImpactMetric({ icon: Icon, number, label, image }: ImpactMetricProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
      <CardContent className="p-6 relative">
        <Image src={image || "/placeholder.svg"} alt="" fill className="object-cover opacity-20" />
        <div className="relative z-10">
          <Icon className="h-8 w-8 mb-4 text-orange-400" />
          <div className="text-3xl font-bold mb-2">{number}</div>
          <p className="text-white/80">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

