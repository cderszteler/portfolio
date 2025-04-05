import initTranslations from "@/app/i18n";
import React from "react";
import {TranslationProvider} from "@/components/TranslationProvider";

const i18nNamespaces = ['contact'];

export async function generateMetadata({ params }:
{
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default async function ContactLayout({params, children}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      {children}
    </TranslationProvider>
  )
}