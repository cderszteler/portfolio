import Link from 'next/link'

import {ContainerInner, ContainerOuter} from '@/components/Container'
import React from "react";
import {Translation} from "@/app/i18n";

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export async function Footer({ t }: { t: Translation }) {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-y-1 sm:gap-y-4">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/about">{t('navigation.about')}</NavLink>
                  <NavLink href="/projects">{t('navigation.projects')}</NavLink>
                  <NavLink href="/contact">{t('navigation.contact')}</NavLink>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 text-sm text-zinc-400 dark:text-zinc-500 sm:justify-start">
                  <NavLink href="/imprint">{t('navigation.imprint')}</NavLink>
                </div>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Christoph Derszteler.&nbsp;
                {t('footer')}
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}