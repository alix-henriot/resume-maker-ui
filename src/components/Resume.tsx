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
    <div className='px-16 py-20'>

        <div className='w-full h-full grid grid-cols-[1.3fr,2fr] gap-4'>

            <div id='left' className='flex flex-col gap-4'>

                <div id="profile" className='p-6 rounded-lg flex flex-col gap-2 shadow-none'>
                    <div className='flex flex-row gap-4 items-center'>
                        <Avatar className='w-12 h-12'>
                            <AvatarImage src={data.profile.picture} alt='profile-picture'/>
                        </Avatar>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-md font-medium leading-none'>{data.profile.name}</h2>
                            <Link className='flex items-center text-muted-foreground' href={`https://github.com${data.profile.github}`}><Github className='w-4 h-4'/>{data.profile.github}</Link>
                        </div>
                    </div>
                    <p className='text-sm text-muted-foreground'>{data.profile.description}</p>
                </div>

                <div id='skills' className='p-6 rounded-lg flex flex-col gap-1'>
                        <h2 className="mb-4 text-md font-medium leading-none">Compétences</h2>
                        {
                            data.skills.map(
                                (skill, index) => (
                                        <div key={index}>
                                            <div className="text-sm">
                                            {skill}
                                            </div>
                                            {index !== data.skills.length - 1 && <Separator className="my-2 bg-gradient-to-l from-slate-50" />}
                                        </div>
                                )
                            )
                        }
                </div>

                <div id='projects' className='p-6 rounded-lg  flex flex-col gap-1'>
                    <h2 className="mb-4 text-md font-medium leading-none">Projets personnels</h2>
                    {
                        data.projects && data.projects.map(
                            (project, index) => (                    
                                <div key={index} className='flex flex-col'>
                                    <div className='mb-4'>
                                        <h4 className='flex text-md items-center mb-1'>{project.name} <ExternalLink className='ml-2 w-4 h-4'/></h4>
                                        <p className='text-sm text-muted-foreground'>
                                            {project.description}
                                        </p>
                                    </div>
                                        
                                    {/*<div className='p-4 rounded-lg bg-muted text-sm text-muted-foreground mb-4'>
                                    <p className='flex font-semibold mb-1 items-center'>Mise à Jour:</p>
                                    <p className='mb-2'>
                                        {project.update}
                                    </p>
                                    <Link href="https://youtu.be" className='flex font-medium underline items-basline'>Voir la Video <ExternalLink className='ml-1 w-4 h-4'/></Link>
                                    </div>*/}

                                    <div className='flex flex-row flex-wrap gap-2 text-sm items-center mb-4'>
                                        <p>Stack :</p>
                                        {
                                            project.stack && project.stack.map(
                                                (stack, index) => (
                                                    <Badge key={index} variant="secondary">{stack}</Badge>
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

            <div id='right' className='flex flex-col gap-4'>

                <div id='experience' className='p-6 rounded-lg flex flex-col'>
                    <div>
                        <h2 className="mb-4 text-md font-medium leading-none">Expérience</h2>
                    </div>

                        {
                            data.experiences.map(
                                (experience, index) => (
                                    <div key={index} className='flex flex-col gap-3 mb-6'>
                                        <h4 className='text-md font-semibold'>{experience.title}</h4>
                                        <div className='flex flex-row gap-2 flex-wrap'>
                                            <Badge>{experience.company}</Badge>
                                            <Badge variant="secondary">{experience.start} - {experience.end}</Badge>
                                            <Badge variant="secondary">{experience.country}</Badge>
                                        </div>

                                        <ul className='flex flex-col gap-4 text-sm'>
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

                <div id='education' className='p-6 rounded-lg flex flex-col gap-1'>
                    <h2 className="mb-4 text-md font-medium leading-none">Diplômes & Certifications</h2>
                    {
                        data.educations.map(
                            (education, index) => (
                                <div key={index} className='flex flex-col gap-2 mb-4'>
                                    <h4 className='text-md font-medium'>{education.title}</h4>
                                    <div className='flex flex-row flex-wrap gap-2'>
                                        <Badge variant="default" className='w-fit'>{education.type}</Badge>
                                        <Badge variant="secondary" className='w-fit'>{education.university}</Badge>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        </div>
    </div>
  )
}