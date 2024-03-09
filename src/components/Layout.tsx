import React from "react";
import {TranslationProvider} from "@/components/TranslationProvider";
import initTranslations from "@/app/i18n";
import {Footer} from "./Footer";
import {Header} from "./header/Header";

const i18nNamespaces = ['index'];

export async function Layout({ locale, children }:
{
  locale: string
  children: React.ReactNode
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"/>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
          <Header/>
        </TranslationProvider>
        <main className="flex-auto">{children}</main>
        <Footer t={t}/>
      </div>
    </>
  )
}
