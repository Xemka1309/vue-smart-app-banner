<script lang="ts">
import { defineComponent, provide } from 'vue'
import SmartAppBanner from './SmartAppBanner.vue'
import type { SmartBannerOptions } from './types'

const options: SmartBannerOptions = {
  title: 'Title',
  androidAppId: '',
  icon: 'https://icon-library.com/images/play-store-icon/play-store-icon-9.jpg',
  iosAppId: '',
  appStoreLanguage: 'us',
  useNativeIosBannerForSafari: false,
  daysHidden: 10,
  daysReminder: 10,
  author: '',
  button: '',
  store: {
    ios: '',
    android: '',
  },
  price: {
    ios: '',
    android: '',
  },
}

provide('smartAppBannerConfig', options)

export default defineComponent({
  name: 'App',
  components: {
    SmartAppBanner,
  },
})
</script>

<template>
  <SmartAppBanner />
</template>
