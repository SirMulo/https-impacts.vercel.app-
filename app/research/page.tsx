import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Download, Share2 } from "lucide-react"
import ResearchItem from "@/components/research-item"
import ResearchFilter from "@/components/research-filter"

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Forstå den reelle kostnaden av undersysselsetting</h1>
            <p className="text-xl mb-8">
              Utforsk data, forskning og analyser som avdekker det uutnyttede potensialet til kompetente innvandrere i
              Norge.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Les vår fullstendige rapport
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Fremhevede forskningsstudier</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="Den økonomiske kostnaden ved manglende godkjenning av kompetanse i Norge"
              excerpt="Ny forskning avdekker hvordan Norges strenge kvalifikasjonskrav koster milliarder i tapt produktivitet."
              author="Dr. Emma Nielsen"
              date="Januar 2024"
            />
            <ResearchItem
              title="Bak tallene: Den menneskelige kostnaden av undersysselsetting"
              excerpt="Omfattende studie viser den psykologiske belastningen av profesjonell fortrengning blant innvandrersamfunn."
              author="Prof. Thomas Berg"
              date="Desember 2023"
            />
            <ResearchItem
              title="Brobygging: Effektive integreringspolitikker for kompetente innvandrere"
              excerpt="Analyse av vellykkede integreringspolitikker fra hele verden og deres potensielle anvendelse i Norge."
              author="Dr. Maria Johansson"
              date="November 2023"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Dybdeforskning og innsikt etter kategori</h2>
          <Tabs defaultValue="economic" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="economic">Økonomiske konsekvenser</TabsTrigger>
              <TabsTrigger value="policy">Politikkanalyse</TabsTrigger>
              <TabsTrigger value="human">Menneskelige konsekvenser</TabsTrigger>
            </TabsList>
            <TabsContent value="economic" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Økonomiske konsekvenser av undersysselsetting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Vår forskning viser at undersysselsetting av kompetente innvandrere koster Norge anslagsvis 2,8
                    milliarder kroner årlig i tapt produktivitet og skatteinntekter. Ringvirkningene strekker seg utover
                    enkelthusstander til nasjonal BNP-vekst, innovasjonsutbytte og internasjonal konkurranseevne.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Les hele studien</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="Den skattemessige kostnaden ved manglende godkjenning av kompetanse"
                  excerpt="Kvantifisering av tapte skatteinntekter når kvalifiserte fagfolk tvinges inn i lavkompetansejobber."
                  author="Dr. Lars Henriksen"
                  date="Mars 2024"
                />
                <ResearchItem
                  title="Innvandrerentreprenørskap og økonomisk vekst"
                  excerpt="Hvordan fjerning av barrierer for profesjonell anerkjennelse kan utløse en ny bølge av innvandrerdrevne bedrifter i Norge."
                  author="Prof. Ingrid Bakke"
                  date="Januar 2024"
                />
              </div>
            </TabsContent>
            <TabsContent value="policy" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluering av nåværende integreringspolitikk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Analyse av Norges nåværende integreringspolitikk avdekker betydelige mangler i håndteringen av de
                    unike utfordringene kompetente innvandrere møter i arbeidsmarkedet. Sammenligningsstudier med
                    Danmark og Canada viser at strømlinjeformede godkjenningsprosesser kan kutte reintegreringstiden med
                    opptil 60 %.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Les hele analysen</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="Hurtigspor-modeller: Lærdommer fra Canada og Tyskland"
                  excerpt="Undersøkelse av hvordan andre nasjoner har lykkes med å akselerere godkjenning av innvandreres kompetanse."
                  author="Dr. Kristin Aas"
                  date="Februar 2024"
                />
                <ResearchItem
                  title="Kommunal vs. nasjonal politikk: Hvor reform skjer raskest"
                  excerpt="En sammenlignende studie av lokale integreringstiltak og deres overraskende store innvirkning på sysselsettingsresultater."
                  author="Prof. Henrik Dahl"
                  date="Desember 2023"
                />
              </div>
            </TabsContent>
            <TabsContent value="human" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Psykologiske konsekvenser av profesjonell fortrengning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Vår studie viser at langvarig undersysselsetting fører til betydelige psykiske helseutfordringer,
                    inkludert depresjon, angst og tap av profesjonell identitet blant kompetente innvandrere i Norge.
                    Over 60 % av respondentene rapporterte en nedgang i selvfølelse direkte knyttet til manglende
                    mulighet til å utøve sitt yrke.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Les hele rapporten</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="Identitetstap og gjenreising blant fordrevne fagfolk"
                  excerpt="Kvalitativ forskning på hvordan kompetente innvandrere gjenoppbygger profesjonell identitet etter år med undersysselsetting."
                  author="Dr. Amina Yusuf"
                  date="November 2023"
                />
                <ResearchItem
                  title="Familie- og samfunnspåvirkning av undersysselsetting blant kompetente innvandrere"
                  excerpt="Hvordan virkningene av profesjonell fortrengning strekker seg utover enkeltpersoner til familier og større innvandrersamfunn."
                  author="Prof. Ragnhild Solheim"
                  date="Oktober 2023"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Søk og filtrer forskning</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input type="search" placeholder="Søk i forskningsartikler..." className="md:w-1/3" />
            <ResearchFilter />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="Arbeidsmarkedsintegrering av kompetente innvandrere"
              excerpt="Analyse av barrierer og muligheter for kompetente innvandrere i Norges arbeidsmarked."
              author="Dr. Anders Eriksen"
              date="Oktober 2023"
            />
            <ResearchItem
              title="Sammenlignende studie: Godkjenningsprosesser for kompetanse"
              excerpt="Undersøkelse av godkjenningsprosesser i de skandinaviske landene og deres resultater."
              author="Prof. Lisa Andersen"
              date="September 2023"
            />
            <ResearchItem
              title="Språkets rolle i profesjonell integrering"
              excerpt="Undersøkelse av språkferdighetenes innvirkning på karriereprogresjon for innvandrere i Norge."
              author="Dr. Olav Johansen"
              date="August 2023"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ta handling</h2>
          <p className="text-xl mb-8">
            Vår forskning er en oppfordring til handling. Bli med oss i kampen for endring og skaping av muligheter for
            kompetente innvandrere i Norge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Bli med i kampen
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" /> Last ned fullstendig rapport
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Share2 className="mr-2 h-5 w-5" /> Del din historie
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Relatert forskning og publikasjoner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="Globale beste praksiser innen integrering av innvandrere"
              excerpt="En omfattende gjennomgang av vellykkede integreringsstrategier fra hele verden."
              author="Dr. Sarah Chen"
              date="Juli 2023"
            />
            <ResearchItem
              title="De langsiktige økonomiske fordelene ved integrering av innvandrere"
              excerpt="Prognoser for den positive økonomiske effekten av vellykket integreringspolitikk det neste tiåret."
              author="Prof. Erik Larsen"
              date="Juni 2023"
            />
            <ResearchItem
              title="Teknologiens rolle i å bygge bro over sysselsettingsgapet"
              excerpt="Utforsking av innovative teknologiske løsninger for å koble kompetente innvandrere med passende jobbmuligheter."
              author="Dr. Mia Solberg"
              date="Mai 2023"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
