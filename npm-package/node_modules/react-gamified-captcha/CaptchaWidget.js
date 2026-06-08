import React, { useEffect, useState } from 'react';

export const GamifiedCaptcha = ({ 
  siteKey = "ch_pub_demo_testkey_12345", 
  onHumanVerified, 
  onError,
  className = "conversion-business-widget",
  style = {}
}) => {
  const [hasError, setHasError] = useState(false);
  const isInvalidKey = !siteKey || siteKey === "ch_pub_demo_testkey_12345";

  useEffect(() => {
    // 1. SSR Safety Check
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // 2. Funnel Logic (Console Warning for missing/demo keys)
    if (isInvalidKey) {
      console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key.");
      setHasError(true);
      return;
    }

    const scriptId = 'conversion-business-sdk';
    let script = document.getElementById(scriptId);
    let isNewScript = false;

    // 3. Singleton Script Loading
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://conversion-business-widgets.web.app/sdk.js';
      script.async = true;
      isNewScript = true;

      // 4. CSP/Network Error Handling (Fail-Open)
      script.onerror = (e) => {
        console.error("Conversion.Business Error: Failed to load SDK. Check your Content Security Policy or AdBlocker.", e);
        if (onError) onError(e);
      };

      document.body.appendChild(script);
    }

    const verificationHandler = (e) => {
      if (onHumanVerified && e.detail?.token) {
        onHumanVerified(e.detail.token);
      }
    };

    document.addEventListener('conversion.business:verified', verificationHandler);

    return () => {
      document.removeEventListener('conversion.business:verified', verificationHandler);
      // We do not remove the script tag because other instances on the page might need it.
    };
  }, [siteKey, onHumanVerified, onError, isInvalidKey]);

  // 5. Funnel Logic (Visual Fallback for missing/demo keys)
  if (hasError || isInvalidKey) {
    return (
      <div style={{ color: '#d32f2f', border: '1px solid #d32f2f', padding: '12px', borderRadius: '4px', backgroundColor: '#fff', fontFamily: 'sans-serif', ...style }} className={className}>
        <strong>Widget Error:</strong> Valid API Key Required. <a href="https://conversion.business" target="_blank" rel="noopener noreferrer" style={{color: '#d32f2f', textDecoration: 'underline'}}>Get your free key here</a>.
      </div>
    );
  }

  // 6. Prop Forwarding to the actual widget container
  return (
    <div 
      className={className} 
      data-sitekey={siteKey} 
      data-theme="light"
      style={style}
    />
  );
};
