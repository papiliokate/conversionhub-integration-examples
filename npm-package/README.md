# react-gamified-captcha

[![Edit Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/oops-games-llc/conversionhub-integration-examples/tree/master/sandbox-template)

A gamified alternative to traditional captchas for React applications. Say goodbye to frustrating traffic lights and blurry crosswalks.

## Important: API Key Required
**To use this package in production, you must register for a free API key at [conversion.business](https://conversion.business).** 
If you do not provide a valid `siteKey`, the widget will not render and your users will see an error.

## Installation

```bash
npm install react-gamified-captcha
```

## Usage

```jsx
import { GamifiedCaptcha } from 'react-gamified-captcha';

function App() {
  const handleVerify = (token) => {
    console.log("Human verified! Token payload:", token);
    // Send this payload to your backend for cryptographic HMAC verification
  };

  return (
    <form>
      {/* ... your form fields ... */}
      
      <GamifiedCaptcha 
        siteKey="YOUR_CONVERSION_BUSINESS_API_KEY" 
        onHumanVerified={handleVerify}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Next.js (SSR) Support
This component is fully SSR-safe and can be used directly in Next.js or Remix applications without requiring dynamic imports.
