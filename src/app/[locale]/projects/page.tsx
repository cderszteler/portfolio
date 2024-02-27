import {type Metadata} from 'next'
import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import abiManagement from '@/images/projects/abi-management.svg'
import klaukeEnterprises from '@/images/clients/klauke-enterprises.png'
import React from "react";
import {LinkIcon} from "@heroicons/react/16/solid";
import {GitHubIcon} from "@/components/SocialIcons";
import {ArrowRightIcon, BuildingOffice2Icon} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects on which and clients with whom I’ve developed.',
}

const projects = [
  {
    name: 'Abi-Management',
    description: 'Fullstack application with Spring Boot and NextJS to manage my school’s graduating year.',
    link: {
      href: 'https://github.com/cderszteler/abi-management',
      label: 'cderszteler/abi-management',
      icon: GitHubIcon
    },
    logo: abiManagement,
  },
]

function Projects() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => {
        const Icon = project.link?.icon ?? LinkIcon

        return (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={`${project.name}'s logo`}
                className="h-8 w-8 rounded-full bg-zinc-800"
                unoptimized
              />
            </div>
            <Card.Title className="mt-6 tracking-normal" href={project.link.href}>
              {project.name}
            </Card.Title>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <Icon className="h-4 w-4 flex-none"/>
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        )
      })}
      <Card as="li">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5">
          <GitHubIcon className="h-10 w-10 rounded-full fill-zinc-900 dark:fill-white"/>
        </div>
        <Card.Title
          className="mt-6 tracking-normal"
          href="https://github.com/cderszteler?tab=repositories"
        >
          More Projects
        </Card.Title>
        <Card.Description className="flex justify-center items-center gap-x-1.5 group-hover:text-teal-500">
          View more of my projects
          <ArrowRightIcon className="w-3.5 h-3.5"/>
        </Card.Description>
      </Card>
    </ul>
  )
}

const clients = [
  {
    name: 'Klauke Enterprises GmbH',
    // excerpt: '', // TODO: Add reference
    logo: klaukeEnterprises,
  },
  {
    name: 'Rabek LLC',
    excerpt: 'We needed [...] expertise in the field of software software development with a focus on backend development. [...] All assigned tasks were completed with great care and to our complete satisfaction.',
  },
]

function Clients() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {clients.map((client) => {
        return (
          <Card as="li" key={client.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {client.logo && (
                <Image
                  src={client.logo}
                  alt={`${client.name}'s logo`}
                  className="h-8 w-8 rounded-md"
                  unoptimized
                />
              )}
              {!client.logo && (
                <BuildingOffice2Icon className="h-7 w-7 rounded-md"/>
              )}
            </div>
            <Card.Title className="mt-6 tracking-normal" href="/contact">
              {client.name}
            </Card.Title>
            {client?.excerpt && (
              <Card.Description>
                &ldquo;{client.excerpt}&rdquo;
              </Card.Description>
            )}
            <p className="relative z-10 mt-6 flex justify-center items-center gap-x-1.5 text-sm text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              Request letter of reference
              <ArrowRightIcon className="w-3.5 h-3.5"/>
            </p>
          </Card>
        )
      })}
    </ul>
  )
}

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="Projects on which and clients with whom I’ve developed."
      intro="Recently, I've worked mostly on internal projects as a freelancer that I cannot share publicly, however, I try to share my work as often as possible. So check out my few public projects or see my clients' letters of reference."
    >
      <Projects/>
      <div className="mt-10 pb-10 border-t border-zinc-100 dark:border-zinc-700/40 sm:mt-20 sm:pb-20"/>
      <Clients/>
    </SimpleLayout>
  )
}