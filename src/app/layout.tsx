import type {Metadata} from "next";

import React from "react";

import '@/styles/tailwind.css'
import {Layout} from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    template: '%s - Christoph Derszteler',
    default: 'Christoph Derszteler - Software engineer, student, and music enthusiast',
  },
  description: 'I’m Christoph, a software engineer and student based in Bonn, Germany. ' +
    'I started freelancing in 2022 and have been passionate about it ever since. ' +
    'In 2024 I will start studying computer science at the university in Bonn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}