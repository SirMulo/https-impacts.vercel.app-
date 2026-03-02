import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, BarChart, Clock, Share2 } from "lucide-react"
import ImpactMetric from "@/components/impact-metric"
import SuccessStory from "@/components/success-story"
import ImpactChart from "@/components/impact-chart"

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
          alt="Professional in a modern office environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Impact of Recognition: Transforming Lives, Shaping Norway's Future
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover how EthoLight is driving systemic change to unlock the potential of skilled immigrants in Norway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Take Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Statistics & Impact Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactMetric
              icon={Users}
              number="78%"
              label="Of skilled immigrants are underemployed"
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            />
            <ImpactMetric
              icon={BarChart}
              number="€2.8B"
              label="Annual cost of underutilization"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            />
            <ImpactMetric
              icon={Clock}
              number="2,500+"
              label="Stories shared by immigrants"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978"
            />
            <ImpactMetric
              icon={Share2}
              number="50%"
              label="Increase in corporate partnerships"
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Real-World Case Studies and Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SuccessStory
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              title="From Engineer to Entrepreneur"
              quote="EthoLight gave me the confidence to start my own business after years of underemployment."
              name="Ahmed Hassan"
              role="Founder, TechBridge Solutions"
            />
            <SuccessStory
              image="https://images.unsplash.com/photo-1573497019236-17f8177b81e8"
              title="Breaking the Glass Ceiling"
              quote="With EthoLight's support, I overcame multiple barriers and now lead a team in my field of expertise."
              name="Maria Silva"
              role="Senior Project Manager, NorTech"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Interactive Data & Results</h2>
          <Card>
            <CardHeader>
              <CardTitle>EthoLight's Impact Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ImpactChart />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Policy & Advocacy Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Legislative Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>EthoLight has contributed to significant policy reforms, including:</p>
                <ul className="list-disc list-inside mt-4">
                  <li>Streamlined credential recognition process for EU/EEA qualifications</li>
                  <li>Increased funding for integration programs targeting skilled immigrants</li>
                  <li>Introduction of fast-track work permit system for in-demand professions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Corporate Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our advocacy has led to meaningful changes in corporate hiring policies:</p>
                <ul className="list-disc list-inside mt-4">
                  <li>20+ major Norwegian companies have implemented bias-free hiring practices</li>
                  <li>Establishment of mentorship programs for skilled immigrants in 15 corporations</li>
                  <li>Creation of 100+ paid internship positions specifically for underemployed skilled immigrants</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <blockquote className="border-l-4 border-blue-600 pl-4 mt-8 italic">
            "EthoLight's tireless advocacy has been instrumental in shaping our new policies on immigrant integration in
            the workforce. Their data-driven approach and compelling personal stories have opened many eyes in the
            parliament."
            <footer className="text-right mt-2">— Kari Nordmann, Member of Parliament</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=100&width=200&text=Partner+${i}`}
                  alt={`Partner ${i} logo`}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white relative">
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
          alt="Modern office space showing collaboration and teamwork"
          fill
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl mb-8">
            Join us in our mission to create a more inclusive Norway for skilled immigrants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join the Movement
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Support a Story
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Share Your Impact
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
