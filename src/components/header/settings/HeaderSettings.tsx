import React, {Fragment} from "react";
import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import {Popover, Transition} from "@headlessui/react";
import clsx from "clsx";
import {ThemeToggle} from "@/components/header/settings/HeaderThemeToggle";
import {
  LanguageSwitch
} from "@/components/header/settings/HeaderLanguageSwitch";

export default function HeaderSettings() {
  return (
    <Menu/>
  )
}

function Menu(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
        <Cog6ToothIcon className={clsx(
          "h-6 w-6 transition",
          "fill-teal-50 dark:fill-zinc-700",
          "stroke-teal-500 group-hover:stroke-teal-600",
          "dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400",
        )}/>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            className="absolute origin-top right-0 w-60 mt-4 z-50 rounded-3xl bg-white px-6 py-5 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 sm:px-8"
            focus
          >
            <div className="flex flex-col gap-y-4">
              <ThemeToggle/>
              <LanguageSwitch/>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}