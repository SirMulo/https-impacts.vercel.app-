import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StorySubmissionForm from "@/components/story-submission-form"
import ScrollToFormButton from "@/components/scroll-to-form-button"

export default function ShareYourStoryPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
          alt="Et mangfoldig gruppe profesjonelle som samarbeider"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Din historie kan gjøre en forskjell</h1>
          <p className="text-xl md:text-2xl mb-8">
            Ved å dele din opplevelse hjelper du oss med å øke bevisstheten og drive endring for kompetente innvandrere
            som opplever undersysselsetting i Norge.
          </p>
          <ScrollToFormButton />
        </div>
      </section>

      <section id="story-form" className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Del din reise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Din historie er uvurderlig. Den hjelper andre med å se at de ikke er alene, og den spiller en avgjørende
                rolle i å forme fremtiden for integrering av innvandrere i Norge.
              </p>
              <StorySubmissionForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
