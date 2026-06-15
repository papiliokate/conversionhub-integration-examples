<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  export let siteKey = "ch_pub_demo_testkey_12345";
  export let gameUrl = "https://conversion.business/sunny-day-maze/";
  
  let className = "conversion-business-widget";
  export { className as class };
  
  export let style = "";

  const dispatch = createEventDispatcher();

  // Static initializers to prevent remounting
  const staticSiteKey = siteKey;
  const staticGameUrl = gameUrl;
  
  const isInvalidKey = !staticSiteKey;
  const computedUrl = `${staticGameUrl}?mode=captcha&clientId=${staticSiteKey}`;

  function verificationHandler(event) {
    if (event.data && event.data.type === 'oops_captcha_solved') {
      if (event.data.payload) {
        dispatch('humanVerified', { payload: event.data.payload, signature: event.data.signature });
      }
    }
  }

  onMount(() => {
    if (isInvalidKey) {
      console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key.");
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('message', verificationHandler);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('message', verificationHandler);
    }
  });
</script>

{#if isInvalidKey}
  <div {...$$restProps} class={className} style="color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif; {style}">
    <strong>Widget Error:</strong> Valid API Key Required. <a href="https://conversion.business" target="_blank" rel="noopener noreferrer" style="color: #d32f2f; text-decoration: underline;">Get your free key here</a>.
  </div>
{:else}
  <iframe 
    {...$$restProps}
    class={className}
    src={computedUrl}
    style="width: 100%; height: 400px; border: none; border-radius: 12px; {style}"
    title="Conversion.Business Validation"
  ></iframe>
{/if}
