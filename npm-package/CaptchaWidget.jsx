import React, { useEffect } from 'react';

export const GamifiedCaptcha = ({ 
  siteKey = "ch_pub_demo_testkey_12345", 
  onHumanVerified,
  gameUrl = "https://conversion.business/sunny-day-maze/",
  className = "conversion-business-widget",
  style = {},
  ...rest
}) => {
  const isInvalidKey = !siteKey;

  useEffect(() => {
    // SSR Safety Check
    if (typeof window === 'undefined') {
      return;
    }

    if (isInvalidKey) {
      console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key.");
    }

    const verificationHandler = (event) => {
      // Ensure we only process events from the conversion.business iframe
      if (event.data && event.data.type === 'oops_captcha_solved') {
        if (onHumanVerified && event.data.payload) {
          onHumanVerified({ payload: event.data.payload, signature: event.data.signature });
        }
      }
    };

    window.addEventListener('message', verificationHandler);

    return () => {
      // Memory leak cleanup when component unmounts
      window.removeEventListener('message', verificationHandler);
    };
  }, [siteKey, onHumanVerified, isInvalidKey]);

  // Visual Fallback for missing/demo keys (The Funnel Trap)
  if (isInvalidKey) {
    return (
      <div {...rest} style={{ color: '#d32f2f', border: '1px solid #d32f2f', padding: '12px', borderRadius: '4px', backgroundColor: '#fff', fontFamily: 'sans-serif', ...style }} className={className}>
        <strong>Widget Error:</strong> Valid API Key Required. <a href="https://conversion.business" target="_blank" rel="noopener noreferrer" style={{color: '#d32f2f', textDecoration: 'underline'}}>Get your free key here</a>.
      </div>
    );
  }

  // Exact iframe architecture matching portal.html
  return (
    <iframe 
      {...rest}
      className={className}
      src={`${gameUrl}?mode=captcha&clientId=${siteKey}`} 
      style={{ width: "100%", height: "400px", border: "none", borderRadius: "12px", ...style }}
      title="Conversion.Business Validation"
    />
  );
};
