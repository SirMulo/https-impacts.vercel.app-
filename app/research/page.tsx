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
            <h1 className="text-4xl font-bold mb-4">Understanding the True Cost of Underemployment</h1>
            <p className="text-xl mb-8">
              Explore the data, research, and analysis that reveal the untapped potential of skilled immigrants in
              Norway.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Read Our Full Report
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Research Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="The Economic Cost of Credential Non-Recognition in Norway"
              excerpt="New research reveals how Norway's strict qualification requirements cost billions in lost productivity."
              author="Dr. Emma Nielsen"
              date="January 2024"
            />
            <ResearchItem
              title="Beyond Numbers: The Human Impact of Underemployment"
              excerpt="Comprehensive study shows the psychological toll of professional displacement on immigrant communities."
              author="Prof. Thomas Berg"
              date="December 2023"
            />
            <ResearchItem
              title="Bridging the Gap: Effective Integration Policies for Skilled Immigrants"
              excerpt="Analysis of successful integration policies from around the world and their potential application in Norway."
              author="Dr. Maria Johansson"
              date="November 2023"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">In-Depth Research Categories & Insights</h2>
          <Tabs defaultValue="economic" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="economic">Economic Impact Studies</TabsTrigger>
              <TabsTrigger value="policy">Policy Analysis</TabsTrigger>
              <TabsTrigger value="human">Human Impact Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="economic" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Consequences of Underemployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our research shows that underemployment of skilled immigrants costs Norway an estimated 2.8 billion
                    NOK annually in lost productivity and tax revenue. The ripple effects extend beyond individual households into national GDP growth, innovation output, and international competitiveness.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Full Study</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="The Fiscal Cost of Credential Non-Recognition"
                  excerpt="Quantifying the tax revenue lost when qualified professionals are forced into low-skill employment."
                  author="Dr. Lars Henriksen"
                  date="March 2024"
                />
                <ResearchItem
                  title="Immigrant Entrepreneurship and Economic Growth"
                  excerpt="How removing barriers to professional recognition could unlock a new wave of immigrant-led businesses in Norway."
                  author="Prof. Ingrid Bakke"
                  date="January 2024"
                />
              </div>
            </TabsContent>
            <TabsContent value="policy" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluation of Current Integration Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Analysis of Norway's current integration policies reveals significant gaps in addressing the unique
                    challenges faced by highly skilled immigrants in the labor market. Comparative studies with Denmark and Canada show that streamlined credential recognition processes can cut reintegration time by up to 60%.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Full Analysis</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="Fast-Track Models: Lessons from Canada and Germany"
                  excerpt="Examining how other nations have successfully accelerated immigrant credential recognition."
                  author="Dr. Kristin Aas"
                  date="February 2024"
                />
                <ResearchItem
                  title="Municipal vs. National Policy: Where Reform Happens Fastest"
                  excerpt="A comparative look at local integration initiatives and their outsized impact on employment outcomes."
                  author="Prof. Henrik Dahl"
                  date="December 2023"
                />
              </div>
            </TabsContent>
            <TabsContent value="human" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Psychological Impact of Professional Displacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our study finds that prolonged underemployment leads to significant mental health challenges,
                    including depression, anxiety, and erosion of professional identity among skilled immigrants in Norway. Over 60% of respondents reported a decline in self-worth directly tied to their inability to practice their profession.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Full Report</Button>
                </CardFooter>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                <ResearchItem
                  title="Identity Loss and Recovery Among Displaced Professionals"
                  excerpt="Qualitative research into how skilled immigrants rebuild professional identity after years of underemployment."
                  author="Dr. Amina Yusuf"
                  date="November 2023"
                />
                <ResearchItem
                  title="Family and Community Impact of Skilled Immigrant Underemployment"
                  excerpt="How the effects of professional displacement extend beyond the individual to families and wider immigrant communities."
                  author="Prof. Ragnhild Solheim"
                  date="October 2023"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Search & Filter Research</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input type="search" placeholder="Search research articles..." className="md:w-1/3" />
            <ResearchFilter />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="Labor Market Integration of Skilled Immigrants"
              excerpt="Analysis of barriers and opportunities for skilled immigrants in Norway's labor market."
              author="Dr. Anders Eriksen"
              date="October 2023"
            />
            <ResearchItem
              title="Comparative Study: Credential Recognition Processes"
              excerpt="Examining credential recognition processes across Scandinavian countries and their outcomes."
              author="Prof. Lisa Andersen"
              date="September 2023"
            />
            <ResearchItem
              title="The Role of Language in Professional Integration"
              excerpt="Investigating the impact of language proficiency on career progression for immigrants in Norway."
              author="Dr. Olav Johansen"
              date="August 2023"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Take Action</h2>
          <p className="text-xl mb-8">
            Our research is a call to action. Join us in advocating for change and creating opportunities for skilled
            immigrants in Norway.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join the Fight for Recognition
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" /> Download Full Report
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <Share2 className="mr-2 h-5 w-5" /> Share Your Story
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Research & Publications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchItem
              title="Global Best Practices in Immigrant Integration"
              excerpt="A comprehensive review of successful integration strategies from around the world."
              author="Dr. Sarah Chen"
              date="July 2023"
            />
            <ResearchItem
              title="The Long-Term Economic Benefits of Immigrant Integration"
              excerpt="Projecting the positive economic impact of successful integration policies over the next decade."
              author="Prof. Erik Larsen"
              date="June 2023"
            />
            <ResearchItem
              title="Technology's Role in Bridging the Employment Gap"
              excerpt="Exploring innovative tech solutions to connect skilled immigrants with suitable job opportunities."
              author="Dr. Mia Solberg"
              date="May 2023"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
