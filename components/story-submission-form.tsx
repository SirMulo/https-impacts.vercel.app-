"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Navnet må inneholde minst 2 tegn.",
    })
    .optional(),
  countryOfOrigin: z.string().min(2, {
    message: "Opprinnelsesland må inneholde minst 2 tegn.",
  }),
  currentJob: z.string().min(2, {
    message: "Nåværende jobb må inneholde minst 2 tegn.",
  }),
  previousProfession: z.string().min(2, {
    message: "Tidligere yrke må inneholde minst 2 tegn.",
  }),
  story: z.string().min(50, {
    message: "Historien din må inneholde minst 50 tegn.",
  }),
  isAnonymous: z.boolean().default(false),
})

export default function StorySubmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      countryOfOrigin: "",
      currentJob: "",
      previousProfession: "",
      story: "",
      isAnonymous: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Takk — din historie er mottatt",
      description:
        "Din historie vil bli gjennomgått og publisert for å bidra til å øke bevisstheten og inspirere andre.",
    })
    form.reset()
    setIsSubmitted(true)
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Takk for at du delte din historie!</h2>
        <p className="mb-6">Din stemme vil bidra til å drive endring og inspirere andre som står overfor lignende utfordringer.</p>
        <Button onClick={() => router.push("/")}>Tilbake til forsiden</Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn (valgfritt)</FormLabel>
              <FormControl>
                <Input placeholder="Ditt navn" {...field} />
              </FormControl>
              <FormDescription>Du kan velge å forbli anonym ved å la dette feltet stå tomt.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="countryOfOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Opprinnelsesland</FormLabel>
              <FormControl>
                <Input placeholder="Ditt opprinnelsesland" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentJob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nåværende jobb</FormLabel>
              <FormControl>
                <Input placeholder="Din nåværende jobb" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="previousProfession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tidligere yrke/kvalifikasjon</FormLabel>
              <FormControl>
                <Input placeholder="F.eks. lege, ingeniør, osv." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Din historie</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Del din opplevelse med undersysselsetting i Norge, hvordan det har påvirket livet ditt, og eventuelle positive resultater eller tiltak som har hjulpet deg."
                  className="min-h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isAnonymous"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Hold min historie anonym</FormLabel>
                <FormDescription>
                  Kryss av i denne boksen hvis du ønsker å dele historien din uten å avsløre identiteten din.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Send inn din historie</Button>
      </form>
    </Form>
  )
}
