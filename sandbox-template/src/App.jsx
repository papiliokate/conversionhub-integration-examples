import { useState } from 'react';
import { GamifiedCaptcha } from 'react-gamified-captcha';
import './App.css';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [token, setToken] = useState(null);

  const handleVerify = (verificationData) => {
    setIsVerified(true);
    setToken(JSON.stringify(verificationData, null, 2));
    console.log("Verified! Data:", verificationData);
  };

  return (
    <div className="app-container" style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>ConversionHub Sandbox</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>This live developer sandbox demonstrates the zero-friction `react-gamified-captcha` widget.</p>
      
      <div className="form-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Create Account</h2>
        <input 
          type="email" 
          placeholder="developer@example.com" 
          disabled={isVerified} 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        {!isVerified ? (
          <div style={{ margin: '15px 0' }}>
            <GamifiedCaptcha 
              siteKey="demo_tenant" 
              onVerify={handleVerify} 
            />
          </div>
        ) : (
          <div className="success-message" style={{ padding: '15px', backgroundColor: '#e6ffe6', border: '1px solid #b3ffb3', borderRadius: '4px', color: '#006600', margin: '15px 0' }}>
            <strong>✅ Verification Successful!</strong>
            <p style={{ fontSize: '12px', wordBreak: 'break-all', marginTop: '8px', color: '#333' }}>
              Token: {token}
            </p>
          </div>
        )}

        <button 
          disabled={!isVerified} 
          style={{ 
            padding: '12px', 
            backgroundColor: isVerified ? '#007bff' : '#ccc', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: isVerified ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          Complete Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
