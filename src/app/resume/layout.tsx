"use client"

import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Page, Text, View, Document, StyleSheet, usePDF } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import TestResume from '@/components/Resume'

type ResumeLayoutProps = {
    children: React.ReactNode,
}

export default function ResumeLayout ({ children }: ResumeLayoutProps) {
    const [instance, updateInstance] = usePDF({ document: <TestResume/> });

    const ExportResumeToPDF = () => {
        ReactPDF.render(<TestResume />, `resume/example.pdf`);

    }

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
            }),
        description: z.string(),
        picture: z.string(),
        github: z.string(),
        languages: z.string(),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "Alix Henriot",
          description: "Passionné par la programmation, l’automobile et la recherche de solutions innovantes pour mes clients.",
          picture: "https://avatars.githubusercontent.com/u/147206208?v=4",
          github: "/alix-henriot",
        },
    })
  
    return (
    <div className='w-full h-[100vh] flex flex-row bg-slate-200'>
        <div id="editor" className='w-[400px] h-full flex flex-col bg-slate-50 p-8 border'>
            <div>
                <h2 className='text-xl font-semibold'>Edit Resume</h2>
                
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Jon Doe" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />

                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Experienced UI Designer..." {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                    </Form>
            </div>

        </div>
        <div id='viewer' className='w-full h-full'>
            <div className='w-full flex flex-row justify-end p-4 bg-slate-50 border border-l-0'>
                <Button onClick={ExportResumeToPDF}>
                    Export
                </Button>
                {/*<a href={instance.url} download="test.pdf">
                    Download
                </a>*/}
            </div>
            <ScrollArea className='h-full w-full flex flex-row justify-center items-center'>
                <div id='resume' className='w-[210mm] h-[297mm] bg-white mx-auto my-4'>
                    {children}
                </div>
            </ScrollArea>
        </div>
    </div>
  )
}