# svelte-gamified-captcha

> **⚠️ MIGRATION TO v2.0.0:** Version 2.0.0 introduces a mandatory security patch for cryptographic backend verification. The `humanVerified` event now emits an object `{ payload, signature }` instead of a JSON string. Please update your event handlers accordingly.

A gamified alternative to traditional captchas for Svelte applications. Say goodbye to frustrating traffic lights and blurry crosswalks.

## Important: API Key Required
**To use this package in production, you must register for a free API key at [conversion.business](https://conversion.business).** 
If you do not provide a valid `siteKey`, the widget will not render and your users will see an error.

## Installation

```bash
npm install svelte-gamified-captcha
```

## Usage

```svelte
<script>
  import { GamifiedCaptcha } from 'svelte-gamified-captcha';

  function handleVerify(event) {
    const token = event.detail;
    console.log("Human verified! Token payload:", token);
    // Send this payload to your backend for cryptographic HMAC verification
  }
</script>

<form>
  <!-- ... your form fields ... -->
  
  <GamifiedCaptcha 
    siteKey="YOUR_CONVERSION_BUSINESS_API_KEY" 
    on:humanVerified={handleVerify}
  />
  
  <button type="submit">Submit</button>
</form>
```
