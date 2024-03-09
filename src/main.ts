
import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoCart, BiQuestionCircle, FaAllergies } from "oh-vue-icons/icons";

import router from './router'

addIcons(CoCart, BiQuestionCircle, FaAllergies);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon)

app.mount('#app')
