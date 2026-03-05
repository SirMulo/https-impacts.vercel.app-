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
          alt="Et mangfoldig fellesskap av familier, barn og fagfolk som står samlet i solskinnet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            EthoLight: Sammen kan vi gjøre en forskjell
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bli med i kampen for anerkjennelse og rettferdighet for kompetente innvandrere i Norge. Dine handlinger kan
            bidra til å endre politikk, åpne muligheter og forme fremtiden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Ta handling nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/share-your-story">Del din historie</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Slik kan du bli med i kampen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActionCard
              title="Signer underskriftskampanjen"
              description="Hjelp oss med å presse på for lovgivning som anerkjenner innvandreres kompetanse og sikrer rettferdige jobbmuligheter."
              ctaText="Signer nå"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Doner for å støtte"
              description="Dine donasjoner hjelper oss med å finansiere programmer som styrker innvandrere til å få tilgang til jobber, utdanning og muligheter i Norge."
              ctaText="Doner nå"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Del din historie"
              description="Din personlige historie kan inspirere andre og belyse behovet for politisk reform. Del din opplevelse for å gjøre din stemme hørt."
              ctaText="Send inn din historie"
              ctaHref="/share-your-story"
            />
            <ActionCard
              title="Bli frivillig"
              description="Vi trenger frivillige til å hjelpe med å organisere arrangementer, workshops og påvirkningskampanjer. Gi av din tid og støtt saken."
              ctaText="Meld deg som frivillig"
              ctaHref="/join-the-fight"
            />
            <ActionCard
              title="Spred budskapet i sosiale medier"
              description="Bruk dine sosiale medier til å spre budskapet. Del vårt innhold og øk bevisstheten om utfordringene kompetente innvandrere står overfor."
              ctaText="Del i sosiale medier"
              ctaHref="https://twitter.com/intent/tweet?text=Støtt+EthoLight"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Påvirkningsverktøy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Påvirkningspakke</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Ferdigskrevne e-poster til politikere</li>
                  <li>Maler for innlegg i sosiale medier</li>
                  <li>Underskriftsskjemaer</li>
                </ul>
                <Button className="mt-4" asChild>
                  <Link href="/join-the-fight">Last ned pakken</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sanntids påvirkningskart</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvocacyMap />
                <Button className="mt-4">Støtt en kampanje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vår innvirkning så langt</h2>
          <ImpactDashboard />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Bli med i bevegelsen</h2>
          <p className="text-xl mb-8">
            Din handling betyr noe. Sammen kan vi skape reell endring for kompetente innvandrere i Norge.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Ta handling nå
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
