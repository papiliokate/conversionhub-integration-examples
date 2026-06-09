<template>
  <div v-if="isInvalidKey" v-bind="$attrs" style="color: #d32f2f; border: 1px solid #d32f2f; padding: 12px; border-radius: 4px; background-color: #fff; font-family: sans-serif;">
    <strong>Widget Error:</strong> Valid API Key Required. <a href="https://conversion.business" target="_blank" rel="noopener noreferrer" style="color: #d32f2f; text-decoration: underline;">Get your free key here</a>.
  </div>
  <iframe 
    v-else
    v-bind="$attrs"
    :src="computedGameUrl"
    style="width: 100%; height: 400px; border: none; border-radius: 12px;"
    title="Conversion.Business Validation"
  ></iframe>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  siteKey: {
    type: String,
    default: "ch_pub_demo_testkey_12345"
  },
  gameUrl: {
    type: String,
    default: "https://conversion.business/sunny-day-maze/"
  }
});

const emit = defineEmits(['humanVerified']);

// Static initializers to prevent Reactivity loop / remount
const staticSiteKey = ref(props.siteKey);
const staticGameUrl = ref(props.gameUrl);

const isInvalidKey = computed(() => !staticSiteKey.value);
const computedGameUrl = computed(() => `${staticGameUrl.value}?mode=captcha&clientId=${staticSiteKey.value}`);

const verificationHandler = (event) => {
  if (event.data && event.data.type === 'oops_captcha_solved') {
    if (event.data.payload) {
      emit('humanVerified', event.data.payload);
    }
  }
};

onMounted(() => {
  if (isInvalidKey.value) {
    console.error("Conversion.Business Error: Invalid Site Key. Please register at https://conversion.business to obtain a valid API key.");
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('message', verificationHandler);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('message', verificationHandler);
  }
});
</script>
