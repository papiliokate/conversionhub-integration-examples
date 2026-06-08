import React, { useEffect, useRef, useState } from 'react';

/**
 * ConversionHub Gamified Captcha Widget
 * A frictionless alternative to reCAPTCHA that increases conversion rates.
 */
export const CaptchaWidget = ({ onVerify, siteKey = "ch_pub_demo_testkey_12345" }) => {
  const widgetRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the ConversionHub script if not already loaded
    if (!document.getElementById('conversionhub-sdk')) {
      const script = document.createElement('script');
      script.id = 'conversionhub-sdk';
      script.src = 'https://conversion-business-widgets.web.app/sdk.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    // Listen for verification event
    const handleVerify = (event) => {
      if (onVerify && event.detail?.token) {
        onVerify(event.detail.token);
      }
    };

    document.addEventListener('conversionhub:verified', handleVerify);

    return () => {
      document.removeEventListener('conversionhub:verified', handleVerify);
    };
  }, [onVerify]);

  return (
    <div className="captcha-container">
      {/* Container for the gamified bot protection widget */}
      <div 
        ref={widgetRef}
        className="conversionhub-widget" 
        data-sitekey={siteKey}
        data-theme="light"
      >
        {!isLoaded && <p>Loading frictionless protection...</p>}
      </div>
    </div>
  );
};

export default CaptchaWidget;
