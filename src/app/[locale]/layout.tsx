import type {Metadata} from "next";

import React from "react";

import '@/styles/tailwind.css'
import {Layout} from "@/components/Layout";
import { Providers } from "./providers";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: {
    template: '%s - Christoph Derszteler',
    default: 'Christoph Derszteler - Software engineer, student, and music enthusiast',
  },
  description: 'I’m Christoph, a software engineer and student based in Bonn, Germany. ' +
    'I started freelancing in 2022 and have been passionate about it ever since. ' +
    'In 2024 I will start studying computer science at the university in Bonn.',
}

const i18nNamespaces = ['index'];

export default async function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string }
  children: React.ReactNode
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers namespaces={i18nNamespaces} resources={resources} locale={locale}>
          <div className="flex w-full">
            <Layout t={t}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}