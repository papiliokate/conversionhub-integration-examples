import { DefineComponent } from 'vue';

export interface GamifiedCaptchaProps {
  siteKey?: string;
  gameUrl?: string;
  className?: string;
  style?: Record<string, any>;
}

export declare const GamifiedCaptcha: DefineComponent<
  GamifiedCaptchaProps,
  {},
  any,
  any,
  any,
  any,
  any,
  { humanVerified: (payload: any) => void }
>;
