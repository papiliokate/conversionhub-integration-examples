import * as React from 'react';

export interface GamifiedCaptchaProps {
  /**
   * Your public site key from the conversion.business dashboard.
   */
  siteKey?: string;

  /**
   * Callback fired when a user successfully beats the micro-game and is verified as human.
   * The payload contains the HMAC verification token.
   */
  onHumanVerified?: (payload: any) => void;

  /**
   * The URL of the specific micro-game to load. Defaults to sunny-day-maze.
   */
  gameUrl?: string;

  /**
   * Custom CSS class name for the wrapper element.
   */
  className?: string;

  /**
   * Custom inline styles for the wrapper element.
   */
  style?: React.CSSProperties;
}

/**
 * A zero-telemetry, gamified CAPTCHA replacement for React applications.
 */
export const GamifiedCaptcha: React.FC<GamifiedCaptchaProps>;
