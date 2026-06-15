<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h1>Vue Sandbox Clean Room</h1>
    
    <h2>Test 1: Happy Path (No Key, Spread Attributes)</h2>
    <p>Should render game. Border should be green. ID should be 'test-1'.</p>
    <GamifiedCaptcha 
      id="test-1" 
      class="custom-vue-class" 
      style="border: 5px solid green" 
      @humanVerified="setTest1Token" 
    />

    <h2>Test 2: Real Key Path</h2>
    <p>Should render game with siteKey injected in URL.</p>
    <GamifiedCaptcha 
      siteKey="real_key_123" 
      @humanVerified="setTest2Token" 
    />

    <h2>Test 3: The Error Path</h2>
    <p>Should render the red error div directly, bypassing the iframe.</p>
    <GamifiedCaptcha 
      siteKey="" 
      @humanVerified="setTest3Token" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GamifiedCaptcha } from 'vue-gamified-captcha';

const test1Token = ref(null);
const test2Token = ref(null);
const test3Token = ref(null);

const setTest1Token = (data) => { test1Token.value = JSON.stringify(data); };
const setTest2Token = (data) => { test2Token.value = JSON.stringify(data); };
const setTest3Token = (data) => { test3Token.value = JSON.stringify(data); };
</script>
