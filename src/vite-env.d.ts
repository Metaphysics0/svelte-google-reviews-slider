/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_PLACES_API_KEY: string;
  readonly VITE_GOOGLE_PLACES_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
