import { createSSRApp } from 'vue'

// todo pinia 待续
import pinia from './stores/index'
import App from './App.vue'

export function createApp() {
  // vue3 实例
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
