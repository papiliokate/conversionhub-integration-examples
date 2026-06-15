<script>
  import { GamifiedCaptcha } from 'svelte-gamified-captcha';

  let test1Token = null;
  let test2Token = null;
  let test3Token = null;

  function handleTest1(event) { test1Token = JSON.stringify(event.detail); }
  function handleTest2(event) { test2Token = JSON.stringify(event.detail); }
  function handleTest3(event) { test3Token = JSON.stringify(event.detail); }
</script>

<main style="padding: 20px; font-family: sans-serif;">
  <h1>Svelte Sandbox Clean Room</h1>
  
  <h2>Test 1: Happy Path (No Key, Spread Attributes)</h2>
  <p>Should render game. Border should be green. ID should be 'test-1'.</p>
  <GamifiedCaptcha 
    id="test-1" 
    class="custom-svelte-class" 
    style="border: 5px solid green" 
    on:humanVerified={handleTest1} 
  />

  <h2>Test 2: Real Key Path</h2>
  <p>Should render game with siteKey injected in URL.</p>
  <GamifiedCaptcha 
    siteKey="real_key_123" 
    on:humanVerified={handleTest2} 
  />

  <h2>Test 3: The Error Path</h2>
  <p>Should render the red error div directly, bypassing the iframe.</p>
  <GamifiedCaptcha 
    siteKey="" 
    on:humanVerified={handleTest3} 
  />
</main>
