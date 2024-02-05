import {type Metadata} from 'next'

import {Container} from '@/components/Container'
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Impressum'
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Impressum
      </h1>
      <div
        className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col items-start">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Anschrift
          </h2>
          <span className="leading-tight">Christoph Derszteler</span>
          <span className="leading-tight">Habsburgerstr. 3</span>
          <span className="tracking-tight">53859 Niederkassel</span>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Kontakt
          </h2>
          <span className="leading-tight">
            <Link
              href="mailto:contact@derszteler.de"
              className="hover:text-zinc-600 dark:hover:text-zinc-300 transition"
            >
              contact@derszteler.de
            </Link>
          </span>
        </div>
      </div>
    </Container>
  )
}