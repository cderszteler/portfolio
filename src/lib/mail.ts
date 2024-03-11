export const nonEmptyFormat = /([a-zA-Z])+/
// noinspection RegExpUnnecessaryNonCapturingGroup
export const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const config = {
  port: parseInt(process.env.MAIL_PORT || "587"),
  host: process.env.MAIL_HOST as string,
  auth: {
    user: process.env.MAIL_USER as string,
    pass: process.env.MAIL_PASSWORD as string,
  },
  secure: !process.env.MAIL_SECURE || process.env.MAIL_SECURE !== "false",
  tls: {
    rejectUnauthorized: !process.env.MAIL_TLS || process.env.MAIL_TLS !== "false"
  }
}