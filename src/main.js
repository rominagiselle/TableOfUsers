import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

axios.defaults.baseURL='http://localhost:3000/api/'

const app = createApp(App)

app.use(ElementPlus)
app.use(store).use(router).mount("#app");
