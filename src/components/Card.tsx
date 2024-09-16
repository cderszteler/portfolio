import Link from 'next/link'
import clsx from 'clsx'
import React from "react"

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className || 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className={clsx(
      className,
      "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    )}>
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"/>
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"/>
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Description = function CardDescription({
  className,
  children,
}: {
  className?: string | undefined
  children: React.ReactNode
}) {
  return (
    <p className={clsx(
      "relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400",
      className
    )}>
      {children}
    </p>
  )
}