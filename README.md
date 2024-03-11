# Portfolio

This website is intended to server as my personal website, which depicts
me as a privat person as well as business partner.
It is built with Next.js 14 and TailwindCSS. Key features are its responsiveness,
dark mode and internationalization.

## Run

You can run the application in development mode with:

```bash
pnpm dev
```

## Build & Deploy

This website is designed to be deployed with Docker.
To build an image, you can execute the `deloy.bat` script or its corresponding
commands.

To build the application as a standalone server, you need to remove the `standalone`
option in the `tailwind.config.ts` file.

The image is hosted on [Docker Hub](https://hub.docker.com/r/qetz/portfolio).