/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  dataLayer: unknown[];
  gtag: (command: string, ...args: unknown[]) => void;
}

declare const dataLayer: unknown[];
declare function gtag(...args: unknown[]): void;