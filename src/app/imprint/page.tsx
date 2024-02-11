import {type Metadata} from 'next'
import React from "react";
import Link from "next/link";
import {SimpleLayout} from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: 'Impressum'
}

export default function About() {
  return (
    <SimpleLayout title="Impressum" intro={""}>
      <div className="space-y-7 text-base text-zinc-600 sm:space-y-12 dark:text-zinc-400">
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Anschrift
          </h2>
          <span className="leading-tight">Christoph Derszteler</span>
          <span className="leading-tight">Habsburgerstr. 3</span>
          <span className="leading-tight">53859 Niederkassel</span>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Kontakt
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