'use client'

import {SimpleLayout} from "@/components/SimpleLayout";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@/components/Button";
import {Input, Label, Textarea} from "@/components/Input";
import {useBeforeUnload} from "@/lib/useBeforeUnload";
import {emailFormat, messageFormat, nameFormat, validForm} from "@/lib/mail";
import {CenteredLoading} from "@/components/Loading";
import clsx from "clsx";
import Modal from "@/components/Modal";
import {CheckIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";

type State = 'invalid' | 'submitting' | 'failed' | 'ok'

export default function Contact() {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<State | undefined>()
  const [modalOpen, setModalOpen] = useState<Extract<State, 'failed' | 'ok'> | undefined>()

  useBeforeUnload(
    !!(firstName.trim() || lastName.trim() || email.trim() || message.trim()),
    t('error.leaving')
  )

  const submit = async () => {
    // Does not proceed if the form is being submitted
    if (state && state !== 'invalid') {
      return
    } else if (!validForm(firstName, lastName, email, message)) {
      setState('invalid')
      return
    }
    setState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, message})
      })
      if (!response.ok) {
        throw new Error()
      }
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setState('ok')
      setModalOpen('ok')
    } catch (error) {
      setState('failed')
      setModalOpen('failed')
    }
    setTimeout(() => setState(undefined), 1000)
  }

  return (
    <SimpleLayout title={t('metadata.title')} center>
      <form className="mx-auto max-w-2xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="first-name">{t('form.firstName')}</Label>
            <div className="mt-2.5">
              <Input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                displayInvalid={state === 'invalid'}
                error={t('error.firstName')}
                pattern={nameFormat}
                className="w-full"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="last-name">{t('form.lastName')}</Label>
            <div className="mt-2.5">
              <Input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                displayInvalid={state === 'invalid'}
                error={t('error.lastName')}
                pattern={nameFormat}
                className="w-full"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">{t('form.email')}</Label>
            <div className="mt-2.5">
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                displayInvalid={state === 'invalid'}
                error={t('error.email')}
                pattern={emailFormat}
                className="w-full"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">{t('form.message')}</Label>
            <div className="mt-2.5">
              <Textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                displayInvalid={state === 'invalid'}
                error={t('error.message')}
                pattern={messageFormat}
                className="block min-h-28 max-h-72 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            onClick={(event) => {
              event.preventDefault()
              submit()
            }}
            className={clsx(
              "w-full flex items-center",
              state === 'submitting' ? "cursor-not-allowed" : "",
              state === 'failed' ? 'animate-shake !bg-red-500 ' : '',
              state === 'ok' ? 'animate-up !bg-green-500 ' : ''
            )}
            disabled={state && state !== 'invalid'}
          >
            {t('form.submit')}
            {state === 'submitting' && (<CenteredLoading className={"w-4"}/>)}
          </Button>
        </div>
      </form>
      <OkModal open={modalOpen === 'ok'} onClose={() => setModalOpen(undefined)}/>
      <FailedModal open={modalOpen === 'failed'} onClose={() => setModalOpen(undefined)}/>
    </SimpleLayout>
  )
}

// The following components are modals that are only visible upon "opening" them
// if the form was submitted successfully or unsuccessfully

function OkModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 ">
          <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true"/>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
            {t('response.ok.title')}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t('response.ok.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-sm transition hover:bg-green-500"
          onClick={onClose}
        >
          {t('response.ok.button')}
        </button>
      </div>
    </Modal>
  )
}

function FailedModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 ">
          <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true"/>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
            {t('response.failed.title')}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t('response.failed.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-sm transition hover:bg-red-500"
          onClick={onClose}
        >
          {t('response.failed.button')}
        </button>
      </div>
    </Modal>
  )
}