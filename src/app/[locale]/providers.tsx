'use client'

import React, {useEffect} from 'react'
import {ThemeProvider, useTheme} from 'next-themes'
import {createInstance, Resource} from "i18next";
import initTranslations from "@/app/i18n";
import {I18nextProvider} from "react-i18next";

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export function Providers({ children, locale, namespaces, resources }:
{
  locale: string;
  namespaces: string[];
  resources: Resource
  children: React.ReactNode
}) {
  const i18n = createInstance();

  // noinspection JSIgnoredPromiseFromCall
  initTranslations(locale, namespaces, i18n, resources);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </I18nextProvider>
  )
}