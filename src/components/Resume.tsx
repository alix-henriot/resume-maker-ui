"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Sparkle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


type ResumeContentProps = {}

export default function TestResume ({}: ResumeContentProps) {

  return (
    <div className='px-16 py-20 bg-white'>

        <div className='w-full h-full grid grid-cols-[1.3fr,2fr] gap-4'>

            <div id='left' className='flex flex-col gap-4'>

                <div id="profile" className='p-5 rounded-lg flex flex-col gap-2 shadow-none'>
                    <div className='flex flex-row gap-4 items-center'>
                        <Avatar className='w-12 h-12'>
                            <AvatarImage src={data.profile.picture} alt='profile-picture'/>
                        </Avatar>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-md font-medium leading-none'>{data.profile.name}</h1>
                            <Link className='flex items-center text-muted-foreground' href={`https://github.com${data.profile.github}`}><Github className='w-4 h-4'/>{data.profile.github}</Link>
                        </div>
                    </div>
                    <p className='text-sm text-muted-foreground'>{data.profile.description}</p>
                </div>

                <div id='skills' className='p-5 rounded-lg flex flex-col gap-1'>
                        <h1 className="mb-4 text-md font-medium leading-none">Compétences</h1>
                        {
                            data.skills.map(
                                (skill, index) => (
                                        <div key={index}>
                                            <p className="text-sm">
                                            {skill}
                                            </p>
                                            {index !== data.skills.length - 1 && <Separator className="my-2 bg-gradient-to-l from-slate-50" />}
                                        </div>
                                )
                            )
                        }
                </div>

                <div id='projects' className='px-5 py-3 rounded-lg  flex flex-col gap-1'>
                    <h1 className="mb-4 text-md font-medium leading-none">Projets personnels</h1>
                    {
                        data.projects && data.projects.map(
                            (project, index) => (                    
                                <div key={index} className='flex flex-col gap-2 mb-4'>
                                    <h4 className='text-md font-semibold'>{project.title}</h4>
                                    <div className='flex flex-row gap-2 flex-wrap'>
                                        <Badge><p>{project.company}</p></Badge>
                                        <Badge variant="secondary"><p>{project.start}</p></Badge>
                                        {/*<Badge variant="secondary">{project.time}</Badge>*/}

                                        <p className='text-sm text-muted-foreground'>
                                        {project.description}
                                        </p>
                                    </div>
                                    
                                    <ul className='flex flex-col gap-4 text-sm'>
                                        {project.tasks.map(
                                            (task, index) => (
                                                <li key={index}>
                                                    {task}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className='flex flex-row flex-wrap gap-2 text-sm items-center mb-4'>
                                        <p>Stack :</p>
                                        {
                                            project.stack && project.stack.map(
                                                (stack, index) => (
                                                    <Badge key={index} variant="secondary"><p>{stack}</p></Badge>
                                                )
                                            )
                                        }
                                    </div>
                                    {index !== data.projects.length - 1 && <Separator className="my-2 bg-gradient-to-l from-slate-50" />}
                                </div>
                            )
                        )
                    }
                </div>

            </div>

            <div id='right' className='flex flex-col gap-2'>

                <div id='experience' className='px-5 py-3 rounded-lg flex flex-col'>
                    <div>
                        <h1 className="mb-4 text-md font-medium leading-none">Expérience</h1>
                    </div>

                        {
                            data.experiences.map(
                                (experience, index) => (
                                    <div key={index} className='flex flex-col gap-3 mb-5'>
                                        <h4 className='text-md font-semibold'>{experience.title}</h4>
                                        <div className='flex flex-row gap-2 flex-wrap'>
                                            <Badge><p>{experience.company}</p></Badge>
                                            <Badge variant="secondary"><p>{experience.start} - {experience.end}</p></Badge>
                                            <Badge variant="secondary"><p>{experience.time}</p></Badge>
                                        </div>

                                        <ul className='flex flex-col gap-3 text-sm'>
                                            {experience.tasks.map(
                                                (task, index) => (
                                                    <li key={index}>
                                                        {task}
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        {/*
                                            experience.achievements && (
                                                <div className='p-4 rounded-lg border flex flex-col gap-1'>
                                                </div>
                                            )
                                        */}
                                    </div>
                                )
                            )
                        }
                </div>

                <div id='education' className='px-5 py-3 rounded-lg flex flex-col gap-1'>
                    <h1 className="mb-4 text-md font-medium leading-none">Diplômes & Certifications</h1>
                    <div className='grid grid-rows-2'>
                    {
                        data.educations.map(
                            (education, index) => (
                                <div key={index} className='flex flex-col gap-2 mb-4'>
                                    <h4 className='text-md font-semibold'>{education.title}</h4>
                                    <div className='flex flex-row flex-wrap gap-2'>
                                        <Badge variant="default" className='w-fit'><p>{education.type}</p></Badge>
                                        <Badge variant="secondary" className='w-fit'><p>{education.university}</p></Badge>
                                    </div>
                                </div>
                            )
                        )
                    }
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}