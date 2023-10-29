/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GLOBAL_PREFIX: string;
  readonly VITE_HOST: string;
  readonly VITE_PORT: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
