'use client'

import {createInstance, Resource} from "i18next";
import React from "react";
import initTranslations from "@/app/i18n";
import {I18nextProvider} from "react-i18next";

export function TranslationProvider({ children, locale, namespaces, resources }:
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
      {children}
    </I18nextProvider>
  )
}