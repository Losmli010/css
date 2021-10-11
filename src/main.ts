import { createApp } from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

Raven.config('http://fbc7138494a24ee09698af8fb3f53303@192.168.43.55:9000/3')
  .addPlugin(RavenVue, app)
  .install()

app.use(router)
app.mount('#app')
