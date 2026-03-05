import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import ActionCard from "@/components/action-card"
import AdvocacyMap from "@/components/advocacy-map"
import ImpactDashboard from "@/components/impact-dashboard"
import NewsletterSignup from "@/components/newsletter-signup"

export default function JoinTheFightPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/community-together.jpg"
          alt="A diverse community of families, children, and professionals coming together in unity with rays of warm sunlight"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            EthoLight: Together, We Can Make a Difference
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join the fight for recognition and justice for skilled immigrants in Norway. Your actions can help change
            policies, open opportunities, and reshape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Take Action Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/share-your-story">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Here's How You Can Join the Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActionCard
              title="Sign the Petition"
              description="Help us push for legislation that recognizes immigrant credentials and ensures fair employment opportunities."
              ctaText="Sign the Petition"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Donate to Support"
              description="Your donations help us fund programs that empower immigrants to access jobs, education, and opportunities in Norway."
              ctaText="Donate Now"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Share Your Story"
              description="Your personal story can inspire others and highlight the need for policy reform. Share your experience to make your voice heard."
              ctaText="Submit Your Story"
              ctaHref="/share-your-story"
            />
            <ActionCard
              title="Volunteer"
              description="We need volunteers to help organize events, workshops, and advocacy campaigns. Lend your time and support the cause."
              ctaText="Sign Up to Volunteer"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Advocate on Social Media"
              description="Use your social media platforms to spread the message. Share our content and raise awareness about the issues facing skilled immigrants."
              ctaText="Share on Social Media"
              ctaHref="https://twitter.com/intent/tweet?text=Support+EthoLight"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Advocacy Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Advocacy Toolkit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pre-written emails for policymakers</li>
                  <li>Social media post templates</li>
                  <li>Petition signing forms</li>
                </ul>
                <Button className="mt-4" asChild>
                  <Link href="/join-the-fight">Download Toolkit</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Advocacy Map</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvocacyMap />
                <Button className="mt-4">Support a Campaign</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact So Far</h2>
          <ImpactDashboard />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join the Movement</h2>
          <p className="text-xl mb-8">
            Your action matters. Together, we can create real change for skilled immigrants in Norway.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Take Action Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </main>
  )
}
