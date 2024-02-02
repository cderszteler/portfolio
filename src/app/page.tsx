import Image, {ImageProps} from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import React from "react";
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import {Container} from "@/components/Container";
import {GitHubIcon, LinkedInIcon} from "@/components/SocialIcons";
import {Button} from "@/components/Button";
import {ArrowDownIcon} from "@heroicons/react/24/solid";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  UserIcon
} from "@heroicons/react/24/outline";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
    </Link>
  )
}

type Role = {
  company: string
  title: string | { label: React.ReactNode, href: string }
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
} & ({ logo: ImageProps['src'], icon?: never } | { icon: typeof UserIcon, logo?: never })

function Role({role}: { role: Role }) {
  const startLabel = typeof role.start === 'string' ? role.start : role.start.label
  const startDate = typeof role.start === 'string' ? role.start : role.start.dateTime

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role?.logo
          ? <Image src={role.logo} alt="" className="text-zinc-500 dark:text-zinc-400 h-7 w-7 rounded-full" unoptimized/>
          // @ts-ignore always defined if 'logo' is undefined
          : <role.icon className="text-zinc-500 dark:text-zinc-400 h-7 w-7 rounded-full"/>
        }
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {typeof role.title !== 'string'
            ? <Link
                href={role.title.href}
                className="hover:text-zinc-600 dark:hover:text-zinc-300 transition"
              >
                {role.title.label}
              </Link>
            : role.title
          }
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Freelancing',
      title: {
        label: (
          <span className="flex items-end justify-center gap-x-1">
            Learn more
            <ArrowRightIcon className="w-3 h-3 "/>
          </span>
        ),
        href: '/projects#clients'
      },
      icon: UserIcon,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none text-zinc-400 dark:text-zinc-500"/>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, index) => (
          <Role key={index} role={role}/>
        ))}
      </ol>
      {/*TODO: Implement download*/}
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-3 w-3 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              // Alternating rotation
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
          >
            Software engineer and student.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Christoph, a software engineer and student based in Bonn, Germany.
            I started freelancing in 2022 and have been passionate about it ever since.
            In 2024 I will start studying computer science at the university in Bonn.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/cderszteler"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/cderszteler"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos/>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-screen-sm">
          <Resume/>
        </div>
      </Container>
    </>
  )
}