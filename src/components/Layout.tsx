import React from "react";
import {Footer} from "@/components/Footer";
import {Header} from "./header/Header";
import {Translation} from "@/app/i18n";

export function Layout({ t, children }: { t: Translation, children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header/>
        <main className="flex-auto">{children}</main>
        <Footer t={t}/>
      </div>
    </>
  )
}
