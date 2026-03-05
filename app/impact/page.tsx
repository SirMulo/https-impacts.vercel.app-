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
          alt="Profesjonell i et moderne kontormiljø"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Effekten av anerkjennelse: Forandrer liv, former Norges fremtid
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Oppdag hvordan EthoLight driver systemendring for å frigjøre potensialet til kompetente innvandrere i Norge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Ta handling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Les om vår innvirkning
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nøkkelstatistikk og effektmålinger</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactMetric
              icon={Users}
              number="78 %"
              label="Av kompetente innvandrere er undersysselsatt"
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            />
            <ImpactMetric
              icon={BarChart}
              number="2,8 mrd. kr"
              label="Årlig kostnad av underutnyttelse"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            />
            <ImpactMetric
              icon={Clock}
              number="2 500+"
              label="Historier delt av innvandrere"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978"
            />
            <ImpactMetric
              icon={Share2}
              number="50 %"
              label="Økning i bedriftspartnerskap"
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Virkelige suksesshistorier</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SuccessStory
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              title="Fra ingeniør til gründer"
              quote="EthoLight ga meg selvtilliten til å starte min egen bedrift etter år med undersysselsetting."
              name="Ahmed Hassan"
              role="Grunnlegger, TechBridge Solutions"
            />
            <SuccessStory
              image="https://images.unsplash.com/photo-1573497019236-17f8177b81e8"
              title="Bryter glasstaket"
              quote="Med støtten fra EthoLight overvant jeg flere barrierer og leder nå et team innen mitt fagfelt."
              name="Maria Silva"
              role="Seniorprosjektleder, NorTech"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Interaktive data og resultater</h2>
          <Card>
            <CardHeader>
              <CardTitle>EthoLights innvirkning over tid</CardTitle>
            </CardHeader>
            <CardContent>
              <ImpactChart />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Politikk- og påvirkningsresultater</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Lovendringer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>EthoLight har bidratt til betydelige politiske reformer, blant annet:</p>
                <ul className="list-disc list-inside mt-4">
                  <li>Forenklet godkjenningsprosess for EU/EØS-kvalifikasjoner</li>
                  <li>Økt finansiering av integreringsprogrammer rettet mot kompetente innvandrere</li>
                  <li>Innføring av et hurtigsporet arbeidstillatelsessystem for etterspurte yrker</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bedriftspartnerskap</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Vårt påvirkningsarbeid har ført til meningsfulle endringer i bedrifters ansettelsespraksis:</p>
                <ul className="list-disc list-inside mt-4">
                  <li>Over 20 store norske selskaper har innført fordomsfri ansettelsespraksis</li>
                  <li>Etablering av mentorprogrammer for kompetente innvandrere i 15 selskaper</li>
                  <li>Opprettelse av over 100 betalte praksisplasser spesielt for undersysselsatte kompetente innvandrere</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <blockquote className="border-l-4 border-blue-600 pl-4 mt-8 italic">
            {'"'}EthoLights utrettelige påvirkningsarbeid har vært avgjørende for utformingen av våre nye retningslinjer
            for integrering av innvandrere i arbeidslivet. Deres datadrevne tilnærming og gripende personlige historier
            har åpnet mange øyne på Stortinget.{'"'}
            <footer className="text-right mt-2">— Kari Nordmann, stortingsrepresentant</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Våre partnere</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/images/partner-nav.jpg", alt: "NAV - Arbeids- og velferdsetaten" },
              { src: "/images/partner-nho.jpg", alt: "NHO - Næringslivets Hovedorganisasjon" },
              { src: "/images/partner-nokut.jpg", alt: "NOKUT - Nasjonalt organ for kvalitet i utdanningen" },
              { src: "/images/partner-imdi.jpg", alt: "IMDi - Integrerings- og mangfoldsdirektoratet" },
            ].map((partner, i) => (
              <div key={i} className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={200}
                  height={100}
                  className="object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white relative">
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
          alt="Moderne kontorlokale som viser samarbeid og teamarbeid"
          fill
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Engasjer deg</h2>
          <p className="text-xl mb-8">
            Bli med oss i vårt oppdrag om å skape et mer inkluderende Norge for kompetente innvandrere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Bli med i bevegelsen
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Støtt en historie
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Del din innvirkning
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
