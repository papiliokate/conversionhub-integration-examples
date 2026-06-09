# Show HN: A zero-telemetry, gamified CAPTCHA for React

**Title:** Show HN: A zero-telemetry, gamified CAPTCHA for React

**Link:** [https://github.com/oops-games-llc/conversionhub-integration-examples](https://github.com/oops-games-llc/conversionhub-integration-examples)

---

**Post Body:**

Hi HN,

We built [conversion.business](https://conversion.business), a drop-in replacement for traditional captchas (like reCAPTCHA and hCaptcha) that uses 2-5 second HTML5 micro-games instead of traffic lights and blurry crosswalks.

**Why we built this:**
We were frustrated by the amount of friction traditional captchas introduce to sign-up flows. More importantly, we disliked the privacy implications of modern captchas that require extensive background telemetry, behavioral tracking, and cross-site cookies just to prove humanity. 

**How it works technically:**
We wanted to prove humanity without tracking the human. 
1. **Zero Telemetry:** The widget uses zero cross-site tracking cookies and zero local storage. We don't track mouse curves or micro-interactions.
2. **Game Randomization:** We serve unpredictable, multi-game challenge rotations on every page load to prevent attackers from training targeted machine-learning bots for a single puzzle type.
3. **Verification:** The widget measures total solve time, checks WebGL renderer signatures to block headless browsers/software renderers (like `SwiftShader` or `llvmpipe`), and validates User-Agents. 
4. **Cryptographic Seal:** When a game is solved, the payload is verified on our backend, and we return an HMAC SHA-256 signature keyed to your server’s secret. You verify this signature before accepting the form submission.
5. **Accessibility:** It is 100% ADA/WCAG 2.1 AA compliant. There is a strictly rate-limited, keyboard-navigable accessibility bypass for screen readers.

We just released our official React NPM package (`react-gamified-captcha`) which compiles to standard ESModules/CommonJS and is fully SSR-safe for Next.js. 

We know developers are rightly skeptical of third-party widgets, so we set up a live CodeSandbox where you can see exactly how much code it takes to implement and play the games right in the browser: [https://codesandbox.io/p/sandbox/github/oops-games-llc/conversionhub-integration-examples/tree/master/sandbox-template](https://codesandbox.io/p/sandbox/github/oops-games-llc/conversionhub-integration-examples/tree/master/sandbox-template)

I'd love to hear your feedback on the architecture, the game mechanics, or any edge cases we might have missed!
