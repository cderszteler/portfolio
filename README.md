# Portfolio

This website is intended to server as my personal website, which depicts
me as a privat person as well as business partner.
It is built with Next.js 14 and TailwindCSS. Key features are its
responsiveness,
dark mode and internationalization.

**Key Features:**

- Fully responsive design
- Light and dark mode
- Complete and extendable internationalization

## Run

You can run the application in development mode with:

```bash
pnpm dev
```

## Build & Deploy

This website is designed to be deployed with Docker.
To build an image, you can execute the `deloy.bat` script or its corresponding
commands.

To build the application as a standalone server, you need to remove
the `standalone`
option in the `tailwind.config.ts` file.

The image is hosted on [Docker Hub](https://hub.docker.com/r/qetz/portfolio).

## Env Variables

| **Variable**    | **Description**                                                                            | **Accepted Values** | **Example**          |
|-----------------|--------------------------------------------------------------------------------------------|---------------------|----------------------|
| `MAIL_PORT`     | The port the mail server is running on.                                                    | Integer             | `587`                |
| `MAIL_HOST`     | The address the mail server is running on.                                                 | String              | `mail.google.com`    |
| `MAIL_USER`     | The user who is to authenticate with the mail server and with which the form mail is sent. | String              | `sender@gmail.com`   |
| `MAIL_RECEIVER` | The address to which the email with the contact form content is sent to.                   | String              | `receiver@gmail.com` |
| `MAIL_PASSWORD` | The password of the user to authenticate with the mail server.                             | String              | `mySecurePassword`   |
| `MAIL_SECURE`   | Whether a secure connection should be used with the mail sever.                            | Boolean             | `true`               |
| `MAIL_TLS`      | Whether tls should be enforced for the connection with the mail sever.                     | Boolean             | `true`               |