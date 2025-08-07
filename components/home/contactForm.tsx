"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {

  DrawerClose,

} from "@/components/ui/drawer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "../ui/card";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(2, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email is too long",
    }),
  subject: z
    .string()
    .min(2, {
      message: "Subject is required",
    })
    .max(50, {
      message: "Subject is too long",
    }),
  message: z
    .string()
    .min(2, {
      message: "Message is required",
    })
    .max(500, {
      message: "Message is too long",
    }),
  honeypot: z.string().optional(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values.honeypot) {
        return;
      }
      console.log(values);

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully.", {
          duration: 5000,
        });

        form.reset();
      } else {
        toast.error("Failed to send the form. Please try again.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Failed to send the form. Please try again.", {
        duration: 5000,
      });
    }
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mx-auto relative w-full max-w-screen-xl ">
      <div>
        <div className="md:pl-8 pl-2 ">
          <h1 className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              className='dark:text-last text-green-500'
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
              </path>
            </svg>
            <ShinyText
              text="Let's connect"
              speed={5}
              disabled={false}
              className='text-lg font-extralight text-green-500 dark:drop-shadow-[0_1px_4px_#30af5b]  dark:text-last'
            />
          </h1>
          <h1 className="text-4xl dark:text-white dark:drop-shadow-[0_1px_4px_#e5e7eb]">
            Let&apos;s create your next big idea.
          </h1>
          <p className="dark:text-white/50 font-extralight">
            Have a question or a project in mind? Feel free to reach out.
            <br />
            <span className="text-customeGreen dark:text-customeGreenDark pt-3 font-bold">Location: Addis Ababa, Ethiopia </span>

          </p>
        </div>
      </div>
      <div className="">
        <Card className="px-4 dark:text-white dark:bg-custPrim/10 border-none m-2">
          <CardHeader className="p-0">
            <CardTitle>Contact me</CardTitle>
            <CardDescription>
              If you have any questions, please feel free to contact me.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 px-4 md:px-0"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="border-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input className="border-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea className="border-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-center gap-6">
                  <Button type="submit" className="w-full bg-customeGreenDark hover:bg-green-700">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
