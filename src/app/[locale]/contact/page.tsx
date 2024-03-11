'use client'

import {SimpleLayout} from "@/components/SimpleLayout";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@/components/Button";
import {Input, Label, Textarea} from "@/components/Input";
import {useBeforeUnload} from "@/lib/useBeforeUnload";

const nonEmptyFormat = /([a-zA-Z])+/
// noinspection RegExpUnnecessaryNonCapturingGroup
const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default function Contact() {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [failed, setFailed] = useState(false)

  useBeforeUnload(
    !!(firstName.trim() || lastName.trim() || email.trim() || message.trim()),
    t('error.leaving')
  )

  const submit = () => {
    if (!nonEmptyFormat.test(firstName)
      || !nonEmptyFormat.test(lastName)
      || !emailFormat.test(email)
      || !nonEmptyFormat.test(message)
    ) {
      setFailed(true)
      return
    }
    // TODO: Implement submit
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
                displayInvalid={failed}
                error={t('error.firstName')}
                pattern={nonEmptyFormat}
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
                displayInvalid={failed}
                error={t('error.lastName')}
                pattern={nonEmptyFormat}
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
                displayInvalid={failed}
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
                displayInvalid={failed}
                error={t('error.message')}
                pattern={nonEmptyFormat}
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
            className="block w-full"
          >
            {t('form.submit')}
          </Button>
        </div>
      </form>
    </SimpleLayout>
  )
}