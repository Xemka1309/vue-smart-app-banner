# Vuejs Smart App Banner [vue 2-3]

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

![Alt text](android_view.png?raw=true "") ![Alt text](ios_view.png?raw=true "")

Based on\
'jQuery Smart Banner' by Arnold Daniels <arnold@jasny.net> https://github.com/jasny/jquery.smartbanner ,\
'Smart App Banner' by Vitaly Glibin <glibin.v@gmail.com> https://github.com/kudago/smart-app-banner

> Smart App Banner for Vuejs

## Usage
### Setup
Vue 3
```js
import { createApp } from 'vue'
import HelloWorld from '@logustra/vivu-npm'
import App from './app.vue'

const app = createApp(App)
app.use(HelloWorld)
```

Vue 2
```js
import Vue from 'vue'
import CompositionAPI from '@vue/composition-api'
import HelloWorld from '@logustra/vivu-npm'

Vue.use(CompositionAPI)
Vue.use(HelloWorld)
```

### Basic Usage
```html
<template>
  <hello-world />
</template>
```
<!--[Demo →](https://stackblitz.com/edit/vitejs-vite-e7qhxx?file=src%2FApp.vue)-->

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vue-smart-app-banner/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/vue-smart-app-banner

[npm-downloads-src]: https://img.shields.io/npm/dt/vue-smart-app-banner.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/vue-smart-app-banner

[license-src]: https://img.shields.io/npm/l/vue-smart-app-banner.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/vue-smart-app-banner
