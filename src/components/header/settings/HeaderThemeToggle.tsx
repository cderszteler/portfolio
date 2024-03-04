import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import clsx from "clsx";

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className={clsx(
        "group rounded-full flex justify-between items-center px-3 py-1.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:ring-white/10 dark:hover:ring-white/20 sm:py-2",
        "fill-teal-50 stroke-teal-500 dark:fill-zinc-700 dark:stroke-zinc-500"
      )}
      onClick={() => setTheme(otherTheme)}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'absolute pointer-events-none inline-block h-9 sm:h-10 w-20 rounded-full opacity-10 transform transition duration-200 ease-in-out',
          resolvedTheme === 'dark'
            ? 'right-0 bg-zinc-50 group-hover:bg-zinc-100'
            : 'left-0 bg-zinc-900 group-hover:bg-zinc-800'
        )}
      />
      <SunIcon className="h-6 w-6 group-hover:stroke-teal-600 dark:group-hover:stroke-zinc-400 transition"/>
      <MoonIcon className="h-6 w-6 group-hover:stroke-teal-600 dark:group-hover:stroke-zinc-400 transition"/>
    </button>
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"/>
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}