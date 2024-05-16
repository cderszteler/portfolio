import React from "react";
import Link from "next/link";
import {SimpleLayout} from "@/components/SimpleLayout";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ['imprint'];

export async function generateMetadata({ params: { locale } }:
{
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t('metadata.title')
  }
}

export default async function Imprint({ params: { locale } }:
{
  params: { locale: string }
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <SimpleLayout title={t('title')} intro={""}>
      <div className="space-y-7 text-base text-zinc-600 sm:space-y-12 dark:text-zinc-400">
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            {t('address')}
          </h2>
          <span className="leading-tight">Christoph Derszteler</span>
          <span className="leading-tight">Habsburgerstr. 3</span>
          <span className="leading-tight">53859 Niederkassel</span>
          {locale !== "de" && (
            <span className="leading-tight">Germany</span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            {t('contact')}
          </h2>
          <span className="leading-tight font-semibold">
            <Link
              href="mailto:contact@derszteler.de"
              className="hover:text-zinc-600 dark:hover:text-zinc-300 transition"
            >
              contact@derszteler.de
            </Link>
          </span>
        </div>
      </div>
    </SimpleLayout>
  )
}