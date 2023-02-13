import { createApp } from 'vue'
import App from './app.vue'
import type { SmartBannerOptions } from './types'

const app = createApp(App)
const options: SmartBannerOptions = {
  useNativeIosBannerForSafari: true,
  daysHidden: 15, // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  title: 'Title',
  author: 'Company LLC',
  button: 'View',
  icon: '',
  icons: {
    android: 'https://icon-library.com/images/play-store-icon/play-store-icon-9.jpg',
    ios: 'https://icon-library.com/images/play-store-icon/play-store-icon-9.jpg',
  },
  store: {
    ios: 'On the App Store',
    android: 'In Google Play',
  },
  price: {
    ios: 'FREE',
    android: 'FREE anroid',
  },
  androidAppId: 'com.redlinegames.attackhole',
  iosAppId: '426415753',
  appStoreLanguage: 'by',
}

app.provide('smartAppBannerConfig', options)
app.mount('#app')
