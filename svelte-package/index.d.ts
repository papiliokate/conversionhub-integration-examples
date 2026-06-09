import { SvelteComponentTyped } from 'svelte';

export interface GamifiedCaptchaProps {
  siteKey?: string;
  gameUrl?: string;
  className?: string;
  style?: string;
}

export interface GamifiedCaptchaEvents {
  humanVerified: CustomEvent<any>;
}

export declare class GamifiedCaptcha extends SvelteComponentTyped<
  GamifiedCaptchaProps,
  GamifiedCaptchaEvents,
  {}
> {}
