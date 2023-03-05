import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        $store: any
    }
}
