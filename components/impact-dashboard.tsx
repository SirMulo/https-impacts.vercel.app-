"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ImpactDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Petitions Signed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">10,000+</div>
          <Progress value={78} className="w-full" />
          <p className="mt-2 text-sm">78% of our petition supporters have been corporate leaders or HR managers.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Donations Raised</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">€100,000+</div>
          <Progress value={65} className="w-full" />
          <p className="mt-2 text-sm">Over €100K raised for immigrant education programs this year.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stories Shared</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">2,500+</div>
          <Progress value={83} className="w-full" />
          <p className="mt-2 text-sm">83% of shared stories have been featured in national media.</p>
        </CardContent>
      </Card>
    </div>
  )
}
