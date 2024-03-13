'use client'

import {DE, FlagComponent, GB} from 'country-flag-icons/react/3x2'
import {usePathname, useRouter} from 'next/navigation';
import React from "react";
import {useTranslation} from 'react-i18next';
import clsx from 'clsx';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className="flex items-center justify-center gap-x-4">
      <Language locale="de" currentLocale={currentLocale} flag={DE} />
      <Language locale="en" currentLocale={currentLocale} flag={GB}/>
    </div>
  )
}

function Language({ locale, currentLocale, flag: Flag }:
{
  locale: string
  currentLocale: string
  flag: FlagComponent
}) {
  const router = useRouter();
  const currentPathname = usePathname();
  const active = locale === currentLocale;

  const handleSubmit = () => {
    storeLocalePreference(locale)

    if (currentLocale !== locale) {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${locale}`));
    }
  }

  return (
    <button onClick={handleSubmit} className={active ? "cursor-default" : ""}>
      <Flag
        className={clsx(
          "w-10 rounded-full shadow-lg shadow-zinc-800/5 transition sm:w-12",
          active
            ? "ring-2 ring-zinc-900/10 dark:ring-white/20"
            : "ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20"
        )}
      />
    </button>
  )
}

const days = 30;

// Stores the preferred language (selected with button) in Browser Cookies for 30 days
function storeLocalePreference(locale: string) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
}