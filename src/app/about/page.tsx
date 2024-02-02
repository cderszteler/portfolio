import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, LinkedInIcon,} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import React from "react";
import {EnvelopeIcon} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Christoph Derszteler. I keep learning to shape a better world.',
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Christoph Derszteler. I keep learning to shape a better world.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My mother told me that ever since I was little, I could pick any
              child’s lock. I was always curious to find out how mechanisms work,
              why certain things behave in the way they do and how to solve
              problems in the most efficient way.
            </p>
            <p>
              When I was barely 13 years old, I started programming and was
              immediately amazed by the logical clarity of computers.
              Since then, I’ve been developing my skills, continuing teaching me
              new techniques and gaining experience. I am proud to say that
              I started freelancing successfully with just 16 years old.
            </p>
            <p>
              Looking ahead, I plan to start studying computer science in
              autumn 2024. I’m really looking forward to expanding my
              knowledge, gaining new insights into different companies and cultures
              and through that learning the tools to shape a better world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/cderszteler"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@derszteler.de"
              icon={EnvelopeIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@derszteler.de
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}