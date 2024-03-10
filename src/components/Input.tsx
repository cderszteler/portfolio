'use client'

import clsx from 'clsx'
import React, {useMemo, useState} from "react";

type PatternCheckedInput = {
  displayInvalid?: boolean,
  error?: string | undefined,
  pattern?: RegExp
}

type PatternCheckedEnhanced<T> = Omit<T, 'pattern'> & PatternCheckedInput

const inputStyle = 'block px-3.5 py-2 text-zinc-800 bg-white/90 rounded-md shadow-lg shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 placeholder:text-zinc-400 sm:text-sm sm:leading-6'
const defaultStyle = 'ring-1 ring-zinc-900/5 dark:ring-white/10'
const errorStyle = 'ring-2 ring-red-300 dark:ring-red-500'

export function Input({
  className,
  children,
  error,
  displayInvalid,
  pattern,
  ...props
}: PatternCheckedEnhanced<React.ComponentPropsWithoutRef<'input'>>) {
  const [input, setInput] = useState<string>()

  const displayError = useMemo(
    () => displayInvalid && !pattern?.test(input || ""),
    [displayInvalid, input, pattern]
  )

  return (
    <>
      <input
        className={clsx(inputStyle, displayError ? errorStyle : defaultStyle, className)}
        {...props}
        onChange={(event) => {
          setInput(event.target.value)
          if (props.onChange) {
            props.onChange(event)
          }
        }}
      >
        {children}
      </input>
      {displayError && (
        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </>
  )
}

export function Textarea({
  className,
  children,
  error,
  displayInvalid,
  pattern,
  ...props
}: PatternCheckedEnhanced<React.ComponentPropsWithoutRef<'textarea'>>) {
  const [input, setInput] = useState<string>()

  const displayError = useMemo(
    () => displayInvalid && !pattern?.test(input || ""),
    [displayInvalid, input, pattern]
  )

  return (
    <>
      <textarea
        className={clsx(inputStyle, displayError ? errorStyle : defaultStyle, className)}
        {...props}
        onChange={(event) => {
          setInput(event.target.value)
          if (props.onChange) {
            props.onChange(event)
          }
        }}
      />
      {displayError && (
        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </>
  )
}

export function Label({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'label'>) {
  className = clsx(
    'block text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100',
    className,
  )

  return (
    <label className={className} {...props}>
      {children}
    </label>
  )
}