"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ImpactDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Underskrifter samlet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">10 000+</div>
          <Progress value={78} className="w-full" />
          <p className="mt-2 text-sm">78 % av våre underskriftsstøttespillere har vært bedriftsledere eller HR-sjefer.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Donasjoner samlet inn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">1 000 000+ kr</div>
          <Progress value={65} className="w-full" />
          <p className="mt-2 text-sm">Over 1 million kroner samlet inn til utdanningsprogrammer for innvandrere i år.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Historier delt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">2 500+</div>
          <Progress value={83} className="w-full" />
          <p className="mt-2 text-sm">83 % av delte historier har blitt omtalt i nasjonale medier.</p>
        </CardContent>
      </Card>
    </div>
  )
}
