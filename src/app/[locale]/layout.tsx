import React from "react";

import '@/styles/tailwind.css'
import {Layout} from "@/components/Layout";
import {Providers} from "./providers";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ['index'];

export async function generateMetadata({ params: { locale } }:
{
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: {
      template: "%s - Christoph Derszteler",
      default: t("metadata.default"),
    },
    description: t('metadata.description'),
  }
}

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