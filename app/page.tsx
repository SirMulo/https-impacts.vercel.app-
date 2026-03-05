import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, ChevronRight, BarChart, Users, Clock, Share2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
            alt="En profesjonell kvinne med et bestemt blikk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-orange-600 text-white hover:bg-orange-700">Fremhevet historie</Badge>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              EthoLight: Styrker kompetente innvandrere i Norge
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {'"'}Jeg ledet et multinasjonalt selskap. Nå vasker jeg kontorer. Dette er ikke bare min historie — det er
              historien til tusenvis av kompetente innvandrere i Norge.{'"'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Bli med i kampen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Del din historie
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-blue-600">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "78 %",
                label: "Av kompetente innvandrere er undersysselsatt",
              },
              {
                icon: BarChart,
                number: "2,8 mrd. kr",
                label: "Årlig tap grunnet underutnyttelse",
              },
              {
                icon: Clock,
                number: "5+ år",
                label: "Gjennomsnittlig tid for å komme tilbake til yrket",
              },
              {
                icon: Share2,
                number: "2 500+",
                label: "Historier samlet inn og flere kommer",
              },
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-white/10 backdrop-blur-sm border-none text-white">
                <stat.icon className="h-8 w-8 mb-4 text-orange-400" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="bg-orange-600 text-white mb-4">Siste historier</Badge>
              <h2 className="font-serif text-3xl font-bold">Suksessen deres sluttet ikke da de flyttet</h2>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              <Link href="/stories">
                Se alle historier
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                title: "Fra ingeniørdirektør til budbilsjåfør",
                quote: "Mine 15 års erfaring betyr ingenting her. Systemet må endres.",
                author: "Ahmed Hassan",
                role: "Tidligere ingeniørdirektør",
              },
              {
                image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8",
                title: "En leges reise tilbake til medisinen",
                quote: "Fem år med rengjøring på sykehus før jeg kunne praktisere medisin igjen.",
                author: "Dr. Maria Silva",
                role: "Nå: Lege i spesialisering",
              },
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                title: "Bryter barrierer i teknologibransjen",
                quote: "De sa erfaringen min ikke talte. Nå leder jeg et utviklingsteam.",
                author: "Sarah Chen",
                role: "Tidligere teknisk leder",
              },
            ].map((story, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4 italic">{'"'}{story.quote}{'"'}</p>
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="font-medium">{story.author}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <Badge className="bg-blue-600 text-white mb-4">Forskning og analyse</Badge>
              <h2 className="font-serif text-3xl font-bold">Forstå konsekvensene</h2>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Se all forskning
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Den økonomiske kostnaden ved manglende godkjenning av kompetanse",
                excerpt:
                  "Ny forskning avdekker hvordan Norges strenge kvalifikasjonskrav koster milliarder i tapt produktivitet",
                author: "Dr. Emma Nielsen",
                date: "Januar 2024",
              },
              {
                title: "Bak tallene: Den menneskelige kostnaden av undersysselsetting",
                excerpt:
                  "Omfattende studie viser den psykologiske belastningen av profesjonell fortrengning blant innvandrersamfunn",
                author: "Prof. Thomas Berg",
                date: "Desember 2023",
              },
            ].map((article, i) => (
              <Card key={i} className="p-6">
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">Forskning</Badge>
                <h3 className="font-serif text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Av {article.author} — {article.date}
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                    Les mer
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="take-action" className="py-24 bg-blue-600 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-white text-white mb-6">
                Ta handling
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Bli med i kampen</h2>
              <p className="text-xl text-white/80 mb-8">
                Hver historie som deles, hver stemme som løftes, bringer oss nærmere en endring av systemet. Sammen kan
                vi skape et Norge som anerkjenner og verdsetter all kompetanse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Del din historie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Støtt vår kampanje
                </Button>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-none p-6">
              <h3 className="font-serif text-xl font-bold mb-6">Hold deg oppdatert</h3>
              <p className="text-white/80 mb-6">
                Meld deg på nyhetsbrevet vårt for å få de siste historiene, forskningen og måter å ta handling på.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Skriv inn e-postadressen din"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-white text-blue-600 hover:bg-white/90">Abonner på nyhetsbrevet</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
