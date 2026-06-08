# react-gamified-captcha

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
    console.log("Human verified! Token:", token);
    // Send this token to your backend for validation
  };

  const handleError = (error) => {
    console.warn("Captcha failed to load or encountered an error. Failing open.", error);
    // Best practice: Fail-open by allowing the user to submit the form anyway
  };

  return (
    <form>
      {/* ... your form fields ... */}
      
      <GamifiedCaptcha 
        siteKey="YOUR_CONVERSION_BUSINESS_API_KEY" 
        onHumanVerified={handleVerify}
        onError={handleError}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Next.js (SSR) Support
This component is fully SSR-safe and can be used directly in Next.js or Remix applications without requiring dynamic imports.

## Graceful Degradation (`onError`)
If a user has an aggressive ad-blocker or strict Content Security Policy that prevents our script from loading, the `onError` callback will fire. We strongly recommend implementing a **fail-open** strategy in this scenario. If `onError` triggers, simply let the user bypass the captcha so you don't lose the signup.
