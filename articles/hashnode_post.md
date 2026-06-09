# Replacing Traditional CAPTCHAs in React with Zero-Telemetry Micro-Games

Modern bot protection presents a difficult trade-off for developers: securing an application typically requires sacrificing user privacy or significantly degrading the user experience. 

Traditional CAPTCHAs (like reCAPTCHA and hCaptcha) increasingly rely on extensive background telemetry—analyzing mouse curves, keystroke dynamics, cross-site cookies, and browser history—to determine if a user is human. When risk scores are low, users are subjected to high-friction image classification puzzles (e.g., identifying traffic lights).

[conversion.business](https://conversion.business) offers an alternative architectural approach: proving humanity without tracking the human. This article breaks down how to implement a zero-telemetry, gamified verification system in a React application.

---

## The Zero-Telemetry Architecture

Instead of passive background tracking, the system requires active engagement through 2-5 second HTML5 micro-games. The architecture relies on three core principles:

### 1. Hardware and Browser Verification (No Cookies)
The widget uses zero cross-site tracking cookies and zero local storage. To identify automated traffic (like headless Chrome or Playwright), the system analyzes the client's WebGL renderer signature. This effectively blocks software renderers (like `SwiftShader` or `llvmpipe`) frequently used in bot networks, without requiring persistent tracking tokens.

### 2. Algorithmic Puzzle Randomization
To prevent attackers from training targeted machine-learning models to solve specific puzzles, the system serves unpredictable, multi-game challenge rotations on every page load. The user might stack turtles, trace a maze, or balance objects, preventing programmatic DOM manipulation from solving the challenge.

### 3. Cryptographic Seals
When a challenge is completed, the frontend payload is verified on the backend. The API returns an HMAC SHA-256 signature keyed to your server’s secret. You verify this cryptographic seal server-side before processing the form submission, preventing payload spoofing.

---

## Implementing in React

The official NPM package (`react-gamified-captcha`) provides a drop-in React component that handles the iframe instantiation, message passing, and secure token retrieval. It compiles to standard ESModules/CommonJS and is fully SSR-safe for frameworks like Next.js and Remix.

### Installation

```bash
npm install react-gamified-captcha
```

### Usage

The component requires a `siteKey` (available for free at conversion.business) and an `onVerify` callback to handle the cryptographic token.

```jsx
import { useState } from 'react';
import { GamifiedCaptcha } from 'react-gamified-captcha';

export default function SignupForm() {
  const [verificationToken, setVerificationToken] = useState(null);

  const handleVerify = (token) => {
    // 1. Store the token temporarily
    setVerificationToken(token);
    console.log("Cryptographic seal received:", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verificationToken) return;

    // 2. Submit the token to your backend for HMAC verification
    await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ token: verificationToken })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="user@example.com" />
      
      {!verificationToken && (
        <GamifiedCaptcha 
          siteKey="YOUR_PUBLIC_SITE_KEY" 
          onVerify={handleVerify} 
        />
      )}

      <button disabled={!verificationToken} type="submit">
        Complete Sign Up
      </button>
    </form>
  );
}
```

### Accessibility Compliance
For users utilizing screen readers, the widget includes a strictly rate-limited, keyboard-navigable accessibility bypass, ensuring 100% ADA/WCAG 2.1 AA compliance.

---

## Try the Live Sandbox

To see the game mechanics in action and test the implementation without installing anything locally, you can view the live CodeSandbox template here: 

**[Live CodeSandbox Demo](https://codesandbox.io/s/github/papiliokate/conversionhub-integration-examples/tree/master/sandbox-template)**

You can find the full source code for the NPM package in the [official integration repository](https://github.com/papiliokate/conversionhub-integration-examples).
