# vue-gamified-captcha

A gamified alternative to traditional captchas for Vue applications. Say goodbye to frustrating traffic lights and blurry crosswalks.

## Important: API Key Required
**To use this package in production, you must register for a free API key at [conversion.business](https://conversion.business).** 
If you do not provide a valid `siteKey`, the widget will not render and your users will see an error.

## Installation

```bash
npm install vue-gamified-captcha
```

## Usage

```vue
<template>
  <form @submit.prevent="submitForm">
    <!-- ... your form fields ... -->
    
    <GamifiedCaptcha 
      siteKey="YOUR_CONVERSION_BUSINESS_API_KEY" 
      @humanVerified="handleVerify"
    />
    
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { GamifiedCaptcha } from 'vue-gamified-captcha';

const handleVerify = (token) => {
  console.log("Human verified! Token payload:", token);
  // Send this payload to your backend for cryptographic HMAC verification
};

const submitForm = () => {
  // Form submission logic
};
</script>
```
