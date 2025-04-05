import React from "react";

import '@/styles/tailwind.css'
import {Layout} from "@/components/Layout";
import {Providers} from "./providers";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ['index'];

export async function generateMetadata({ params }:
{
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: {
      template: "%s - Christoph Derszteler",
      default: t("metadata.default"),
    },
    description: t('metadata.description'),
  }
}

export default async function RootLayout({params, children}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await params;
  const { i18n } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={i18n.language} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout locale={locale}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}