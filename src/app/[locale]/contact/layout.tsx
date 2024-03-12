import initTranslations from "@/app/i18n";
import React from "react";
import {TranslationProvider} from "@/components/TranslationProvider";

const i18nNamespaces = ['contact'];

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

export default async function ContactLayout({
  params: { locale },
  children,
}: {
  params: { locale: string }
  children: React.ReactNode
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      {children}
    </TranslationProvider>
  )
}