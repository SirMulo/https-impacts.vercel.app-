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
      message: "Name must be at least 2 characters.",
    })
    .optional(),
  countryOfOrigin: z.string().min(2, {
    message: "Country of origin must be at least 2 characters.",
  }),
  currentJob: z.string().min(2, {
    message: "Current job must be at least 2 characters.",
  }),
  previousProfession: z.string().min(2, {
    message: "Previous profession must be at least 2 characters.",
  }),
  story: z.string().min(50, {
    message: "Your story must be at least 50 characters.",
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
      title: "Thank you -- your story has been received",
      description:
        "Your story will be reviewed and published to help raise awareness and inspire others.",
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
        <h2 className="text-2xl font-bold mb-4">Thank You for Sharing Your Story!</h2>
        <p className="mb-6">Your voice will help drive change and inspire others facing similar challenges.</p>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
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
              <FormLabel>Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>You can choose to remain anonymous by leaving this field blank.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="countryOfOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country of Origin</FormLabel>
              <FormControl>
                <Input placeholder="Your country of origin" {...field} />
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
              <FormLabel>Current Job</FormLabel>
              <FormControl>
                <Input placeholder="Your current job" {...field} />
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
              <FormLabel>Previous Profession/Qualification</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Doctor, Engineer, etc." {...field} />
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
              <FormLabel>Your Story</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience with underemployment in Norway, how it has affected your life, and any positive outcomes or actions that helped you."
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
                <FormLabel>Keep my story anonymous</FormLabel>
                <FormDescription>
                  Check this box if you want to share your story without revealing your identity.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit Your Story</Button>
      </form>
    </Form>
  )
}
