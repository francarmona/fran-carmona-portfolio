/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MAILJET_API_KEY: string
  readonly MAILJET_SECRET_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
