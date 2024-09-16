import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import abiManagement from '@/images/projects/abi-management.svg'
import birthdayNotificationService from '@/images/projects/google-contacts-birthday-notification-service.svg'
import klaukeEnterprises from '@/images/clients/klauke-enterprises.png'
import React from "react";
import {LinkIcon} from "@heroicons/react/16/solid";
import {GitHubIcon} from "@/components/SocialIcons";
import {ArrowRightIcon, BuildingOffice2Icon} from "@heroicons/react/24/outline";
import initTranslations, {Translation} from "@/app/i18n";

const i18nNamespaces = ['projects'];

export async function generateMetadata({ params: { locale } }:
{
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default async function ProjectsPage({ params: { locale } }:
{
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <SimpleLayout
      title={t('title')}
      intro={t('intro')}
    >
      <Projects t={t}/>
      <div className="mt-10 pb-10 border-t border-zinc-100 dark:border-zinc-700/40 sm:mt-20 sm:pb-20"/>
      <Clients t={t}/>
    </SimpleLayout>
  )
}

const projects = [
  {
    name: 'Abi-Management',
    description: (t: Translation) => t("projects.abi-management.description"),
    link: {
      href: 'https://github.com/cderszteler/abi-management',
      label: 'cderszteler/abi-management',
      icon: GitHubIcon
    },
    logo: abiManagement,
  },
  {
    name: 'Contacts Birthday Notification Service',
    description: (t: Translation) => t("projects.birthday-notification-service.description"),
    link: {
      href: 'https://github.com/cderszteler/google-contacts-birthday-notification',
      label: 'cderszteler/google-contacts-birthday-notification',
      icon: GitHubIcon
    },
    logo: birthdayNotificationService,
  },
]

function Projects({ t }: { t: Translation }) {
  return (
    <ul
      role="list"
      className="grid grid-rows-[auto_auto_auto_auto] grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 -mb-16"
    >
      {projects.map((project) => {
        const Icon = project.link?.icon ?? LinkIcon

        return (
          <Card
            as="li"
            key={project.name}
            className="group relative grid grid-rows-subgrid row-span-4 mb-16"
          >
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
            <Card.Description>{project.description(t)}</Card.Description>
            <p className="relative z-10 mt-6 flex items-start text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <Icon className="mt-0.5 h-4 w-4 flex-none"/>
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        )
      })}
      <Card as="li" className="group relative grid grid-rows-subgrid row-span-4 mb-16">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5">
          <GitHubIcon className="h-10 w-10 rounded-full fill-zinc-900 dark:fill-white"/>
        </div>
        <Card.Title
          className="mt-6 tracking-normal"
          href="https://github.com/cderszteler?tab=repositories"
        >
          {t('projects.more.title')}
        </Card.Title>
        <Card.Description className="flex items-start group-hover:text-teal-500">
          <span className="flex justify-center items-center gap-x-1.5">
            {t('projects.more.description')}
            <ArrowRightIcon className="w-3.5 h-3.5"/>
          </span>
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
    excerpt: (t: Translation) => t('clients.rabek.excerpt'),
  },
]

function Clients({ t }: { t: Translation }) {
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
                &ldquo;{client.excerpt(t)}&rdquo;
              </Card.Description>
            )}
            <p className="relative z-10 mt-6 flex justify-center items-center gap-x-1.5 text-sm text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              {t('clients.letter-of-reference')}
              <ArrowRightIcon className="w-3.5 h-3.5"/>
            </p>
          </Card>
        )
      })}
    </ul>
  )
}