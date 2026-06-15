import React, { useState } from 'react';
import { GamifiedCaptcha } from 'react-gamified-captcha';

function App() {
  const [test1Token, setTest1Token] = useState(null);
  const [test2Token, setTest2Token] = useState(null);
  const [test3Token, setTest3Token] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Sandbox Clean Room</h1>
      
      <h2>Test 1: Happy Path (No Key, Spread Attributes)</h2>
      <p>Should render game. Border should be green. ID should be 'test-1'.</p>
      <GamifiedCaptcha 
        id="test-1" 
        className="custom-react-class" 
        style={{ border: '5px solid green' }} 
        onHumanVerified={(d) => setTest1Token(JSON.stringify(d))} 
      />

      <h2>Test 2: Real Key Path</h2>
      <p>Should render game with siteKey injected in URL.</p>
      <GamifiedCaptcha 
        siteKey="real_key_123" 
        onHumanVerified={(d) => setTest2Token(JSON.stringify(d))} 
      />

      <h2>Test 3: The Error Path</h2>
      <p>Should render the red error div directly, bypassing the iframe.</p>
      <GamifiedCaptcha 
        siteKey="" 
        onHumanVerified={setTest3Token} 
      />
    </div>
  );
}

export default App;
